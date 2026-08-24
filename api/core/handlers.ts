/**
 * Framework-agnostic endpoint logic. Adapters (Vercel function, Express
 * server, Supabase Edge) translate transport <-> these functions.
 */
import { clamp } from './security.ts';
import { ApiError, escapeHtml } from './security.ts';
import { buildAskTwinSystemPrompt, buildBriefPrompt, buildContactAnalysisPrompt } from './prompts.ts';
import { streamGroqChat, groqChat, type GroqMessage } from './groq.ts';
import { getCache, setCache } from './cache.ts';
import { parseMediumRSS, type MediumStory } from './rssParser.ts';
import { getEnv } from './env.ts';

export { ApiError };
export type { MediumStory };

// ─── ask-twin ────────────────────────────────────────────────────────────────

export interface HistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

/** Minimal contract the host implements to supply RAG context (Node-only). */
export interface RagSearcher {
  searchKnowledge(
    query: string,
    options?: { topK?: number; featuredOnly?: boolean }
  ): Array<{ title: string; content: string }>;
}

/**
 * Eagerly validates /api/ask-twin input so adapters can reject bad requests
 * with a proper status code before opening an SSE stream.
 * Returns the clamped message on success.
 */
export function validateAskTwinInput(rawMessage: unknown, rawHistory: unknown): string {
  const message = clamp(rawMessage, 4000);
  if (!message.trim()) {
    throw new ApiError(400, 'Message is required.');
  }
  if (rawHistory !== undefined && (!Array.isArray(rawHistory) || rawHistory.length > 40)) {
    throw new ApiError(400, 'Invalid conversation history.');
  }
  return message;
}

/**
 * Validates input and streams assistant deltas for /api/ask-twin.
 */
export async function* streamAskTwin(
  rawMessage: unknown,
  rawHistory: unknown,
  rag?: RagSearcher
): AsyncGenerator<string> {
  const message = validateAskTwinInput(rawMessage, rawHistory);

  const history: GroqMessage[] = Array.isArray(rawHistory)
    ? rawHistory.slice(-20).map((h: any) => ({
        role: h?.role === 'user' ? ('user' as const) : ('assistant' as const),
        content: clamp(h?.content, 4000),
      }))
    : [];

  let systemPrompt = buildAskTwinSystemPrompt();
  if (rag) {
    try {
      const docs = rag.searchKnowledge(message, { topK: 6, featuredOnly: false });
      const context = docs
        .map((d) => `## ${d.title}\n${clamp(d.content, 4000)}`)
        .join('\n\n---\n\n')
        .slice(0, 24_000);
      systemPrompt = buildAskTwinSystemPrompt(context);
    } catch (err) {
      console.error('[ask-twin] RAG retrieval failed, falling back to inline prompt', err);
    }
  }

  yield* streamGroqChat([
    { role: 'system', content: systemPrompt },
    ...history,
    { role: 'user', content: `<user_message>\n${message}\n</user_message>` },
  ]);
}

// ─── summarize-brief ─────────────────────────────────────────────────────────

export async function summarizeBrief(body: any): Promise<{ summary: string }> {
  const projectType = clamp(body?.projectType, 200);
  const budget = clamp(body?.budget, 100);
  const timeline = clamp(body?.timeline, 100);
  const goals = clamp(body?.goals, 4000);
  const comments = clamp(body?.comments, 2000);

  if (!projectType.trim() || !goals.trim()) {
    throw new ApiError(400, 'Project Type and Goals are required parameters.');
  }

  const summary = await groqChat(
    [{ role: 'user', content: buildBriefPrompt({ projectType, budget, timeline, goals, comments }) }],
    { temperature: 0.7, maxTokens: 400 }
  );
  return { summary };
}

// ─── tts (vestigial placeholder kept for route compatibility) ────────────────

export function ttsPlaceholder(): { audio: null } {
  return { audio: null };
}

// ─── medium-stories ──────────────────────────────────────────────────────────

const MEDIUM_FEED_URL = 'https://medium.com/feed/@farhankabir133';
const MEDIUM_TTL_MS = 15 * 60 * 1000;

export async function getMediumStories(): Promise<CacheEntryShape<MediumStory[]>> {
  const cached = getCache<MediumStory[]>('medium-stories');
  if (cached) return cached;

  const response = await fetch(MEDIUM_FEED_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    console.error('[medium] RSS fetch failed:', response.status);
    throw new ApiError(502, 'Failed to fetch stories. Please try again later.');
  }

  const xmlText = await response.text();
  const stories = parseMediumRSS(xmlText);
  setCache('medium-stories', stories, MEDIUM_TTL_MS);
  return getCache<MediumStory[]>('medium-stories')!;
}

// ─── github-repos ────────────────────────────────────────────────────────────

export interface RepoSummary {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

const GITHUB_TTL_MS = 60 * 60 * 1000;

export async function getGithubRepos(): Promise<CacheEntryShape<RepoSummary[]>> {
  const cached = getCache<RepoSummary[]>('github-repos');
  if (cached) return cached;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'FarhanOS-Portfolio/1.0',
  };
  const token = getEnv('GITHUB_TOKEN');
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch('https://api.github.com/users/farhankabir133/repos?sort=stars&per_page=100', {
    headers,
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    console.error('[github] API failed:', response.status);
    throw new ApiError(502, 'Failed to fetch repositories. Please try again later.');
  }

  const repos = await response.json();
  const topRepos: RepoSummary[] = (Array.isArray(repos) ? repos : [])
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      homepage: repo.homepage,
    }));

  setCache('github-repos', topRepos, GITHUB_TTL_MS);
  return getCache<RepoSummary[]>('github-repos')!;
}

// Structural type to avoid importing CacheEntry generic plumbing into adapters.
export interface CacheEntryShape<T> {
  data: T;
  etag: string;
  fetchedAt: number;
}

// ─── contact ─────────────────────────────────────────────────────────────────

export interface ContactResult {
  analysis: {
    urgency?: string;
    inquiryType?: string;
    summaryText?: string;
    suggestedAutoReply?: string;
  };
  emailStatus: { sent: boolean; id?: string; error?: string };
}

const CONTACT_RECIPIENT = 'farhankabir236@gmail.com';
const CONTACT_FROM = 'Farhan Kabir <contact@farhankabir.me>';

function dhakaTimestamp(): string {
  return (
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }) + ' (GMT+6)'
  );
}

function buildContactEmailHtml(opts: {
  name: string;
  email: string;
  subject: string;
  message: string;
  metadata?: unknown;
  urgency: string;
  inquiryType: string;
  summaryText: string;
  suggestedAutoReply: string;
}): string {
  const e = escapeHtml;
  return `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; color: #111;">
  <h2>New Contact Transmission</h2>
  <p><strong>Name:</strong> ${e(opts.name) || 'Anonymous'}</p>
  <p><strong>Email:</strong> ${e(opts.email)}</p>
  <p><strong>Subject:</strong> ${e(opts.subject) || 'No Subject'}</p>
  <p><strong>Message:</strong></p>
  <p>${e(opts.message).replace(/\r?\n/g, '<br>')}</p>
  ${opts.metadata ? `<pre>${e(JSON.stringify(opts.metadata, null, 2).slice(0, 2000))}</pre>` : ''}
  <p><strong>Urgency:</strong> ${opts.urgency}</p>
  <p><strong>Type:</strong> ${e(opts.inquiryType) || 'General Inquiry'}</p>
  <p><strong>Summary:</strong> ${e(opts.summaryText) || 'No analysis available.'}</p>
  <p><strong>Suggested Auto Reply:</strong></p>
  <blockquote>${e(opts.suggestedAutoReply).replace(/\r?\n/g, '<br>') || 'None'}</blockquote>
  <p><strong>Timestamp:</strong> ${dhakaTimestamp()}</p>
</body>
</html>`;
}

/**
 * Full contact pipeline: validate → best-effort AI analysis → email delivery.
 * Analysis failure never blocks or loses the message.
 */
export async function processContact(body: any): Promise<ContactResult> {
  const name = clamp(body?.name, 120).trim();
  const email = clamp(body?.email, 254).trim();
  const subject = clamp(body?.subject, 200).trim();
  const message = clamp(body?.message, 8000);

  if (!email || !message.trim()) {
    throw new ApiError(400, 'Email and message are required fields.');
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new ApiError(400, 'A valid email address is required.');
  }

  console.log(`[Message Transmission]: From: ${name || 'N/A'} <${email}>, Subject: ${subject || 'N/A'}`);

  // Best-effort urgency classification — never block delivery on AI failure.
  let analysis: ContactResult['analysis'] = {};
  try {
    const analysisJson = await groqChat(
      [{ role: 'user', content: buildContactAnalysisPrompt({ name, email, subject, message }) }],
      { temperature: 0.2, maxTokens: 400, json: true, timeoutMs: 20_000 }
    );
    try {
      analysis = JSON.parse(analysisJson);
    } catch (_e) {
      // proceed without analysis
    }
  } catch (err) {
    console.error('[contact] analysis failed:', err);
  }

  const safeUrgency = ['High', 'Medium', 'Low'].includes(String(analysis.urgency))
    ? String(analysis.urgency)
    : 'Medium';
  const inquiryType = clamp(analysis.inquiryType, 80);
  const urgencyIcon = safeUrgency === 'High' ? '🔴' : safeUrgency === 'Medium' ? '🟡' : '🟢';

  const resendApiKey = getEnv('RESEND_API_KEY');
  let emailStatus: ContactResult['emailStatus'];
  if (!resendApiKey) {
    console.warn('[Contact] RESEND_API_KEY not set — email notification skipped.');
    emailStatus = { sent: false, error: 'RESEND_API_KEY not configured.' };
  } else {
    // Model output deliberately kept out of the subject line beyond a
    // validated urgency icon, to prevent forged notification subjects.
    const emailSubject = `[FarhanOS] ${urgencyIcon} New contact message from ${email}`;
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: CONTACT_FROM,
          to: [CONTACT_RECIPIENT],
          subject: emailSubject,
          html: buildContactEmailHtml({
            name,
            email,
            subject,
            message,
            metadata: body?.metadata,
            urgency: safeUrgency,
            inquiryType,
            summaryText: clamp(analysis.summaryText, 300),
            suggestedAutoReply: clamp(analysis.suggestedAutoReply, 1000),
          }),
        }),
        signal: AbortSignal.timeout(15_000),
      });

      const emailBody = await emailRes.json().catch(() => ({}) as any);
      if (emailRes.ok) {
        emailStatus = { sent: true, id: (emailBody as any).id };
      } else {
        console.error('[Contact] Resend error:', emailRes.status, (emailBody as any)?.message);
        emailStatus = { sent: false, error: `Email delivery failed (${emailRes.status}).` };
      }
    } catch (emailErr) {
      console.error('[Contact] Resend request threw:', emailErr);
      emailStatus = { sent: false, error: 'Email delivery timed out or failed.' };
    }
  }

  return { analysis, emailStatus };
}
