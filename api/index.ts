import crypto from 'node:crypto';
import { searchKnowledge, getAllDocs } from './knowledge-loader';

export interface MediumStory {
  id: string;
  title: string;
  category: 'AI' | 'Engineering' | 'Productivity' | 'Research' | 'Life' | 'Startups' | 'Design' | 'Philosophy';
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  link: string;
  imageUrl: string;
}

function parseMediumRSS(xmlText: string): MediumStory[] {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const matches = [...xmlText.matchAll(itemRegex)];
  const items = matches.slice(0, 6);

  return items.map((match, idx) => {
    const item = match[1];

    const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : '';

    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    const link = linkMatch ? linkMatch[1].trim() : '';

    const pubDateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const rawDate = pubDateMatch ? pubDateMatch[1].trim() : '';
    let formattedDate = rawDate;
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
    } catch (_e) {
    }

    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/);
    let snippet = '';
    let imageUrl = '';
    let cleanContent = '';

    if (descMatch) {
      const descHtml = descMatch[1];

      const imgMatch = descHtml.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch) {
        imageUrl = imgMatch[1];
      }

      const snippetMatch = descHtml.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);
      if (snippetMatch) {
        snippet = snippetMatch[1].trim();
      }

      cleanContent = descHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

      if (!snippet) {
        snippet = cleanContent.slice(0, 150) + (cleanContent.length > 150 ? '...' : '');
      }
    }

    const categories: string[] = [];
    const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(item)) !== null) {
      categories.push(catMatch[1]);
    }

    let finalCategory: MediumStory['category'] = 'Life';
    const lowercaseCategories = categories.map(c => c.toLowerCase());
    if (lowercaseCategories.some(c => c.includes('ai') || c.includes('artificial') || c.includes('gpt') || c.includes('llm'))) {
      finalCategory = 'AI';
    } else if (lowercaseCategories.some(c => c.includes('dev') || c.includes('coding') || c.includes('program') || c.includes('software') || c.includes('architecture') || c.includes('engineering'))) {
      finalCategory = 'Engineering';
    } else if (lowercaseCategories.some(c => c.includes('productiv') || c.includes('work') || c.includes('career') || c.includes('growth'))) {
      finalCategory = 'Productivity';
    } else if (lowercaseCategories.some(c => c.includes('research') || c.includes('science') || c.includes('clinic'))) {
      finalCategory = 'Research';
    } else if (lowercaseCategories.some(c => c.includes('design') || c.includes('ux') || c.includes('ui'))) {
      finalCategory = 'Design';
    } else if (lowercaseCategories.some(c => c.includes('startup') || c.includes('business') || c.includes('saas'))) {
      finalCategory = 'Startups';
    } else if (lowercaseCategories.some(c => c.includes('philosoph') || c.includes('think'))) {
      finalCategory = 'Philosophy';
    }

    const wordCount = cleanContent.split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 225));
    const readTime = `${readTimeMins} min read`;

    const guidMatch = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/);
    const rawGuid = guidMatch ? guidMatch[1].trim() : '';
    const guidIdMatch = rawGuid.match(/\/p\/([a-f0-9]+)$/) || link.match(/-([a-f0-9]+)$/) || rawGuid.match(/\/p\/([a-f0-9]+)/);
    const id = guidIdMatch ? guidIdMatch[1] : `medium-${idx}`;

    return {
      id,
      title,
      category: finalCategory,
      readTime,
      date: formattedDate,
      excerpt: snippet,
      content: cleanContent || snippet || title,
      link,
      imageUrl
    };
  });
}

interface CacheEntry {
  data: any;
  expires: number;
  fetchedAt: number;
}

const cache = new Map<string, CacheEntry>();

function setCache(key: string, data: any, ttlMs: number) {
  cache.set(key, { data, expires: Date.now() + ttlMs, fetchedAt: Date.now() });
}

function getCache(key: string): { data: any; fetchedAt: number } | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return { data: entry.data, fetchedAt: entry.fetchedAt };
}

function generateETag(data: any): string {
  return `"${crypto.createHash('md5').update(JSON.stringify(data)).digest('hex')}"`;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, x-client-info, apikey, content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  try {
    const path = req.url || '/';

    if (path.startsWith('/api/ask-twin') && req.method === 'POST') {
      const { message, history } = req.body;
      if (!message) {
        res.status(400).json({ error: 'Message is required.' });
        return;
      }

      let context = '';
      try {
        const docs = searchKnowledge(message, { topK: 6, featuredOnly: false });
        context = docs.map(d => `## ${d.title}\n${d.content}`).join('\n\n---\n\n');
      } catch (err) {
        console.error('RAG retrieval failed, falling back to inline prompt', err);
      }

      const basePrompt = `You are "Farhan AI", a premium personal AI representative of Farhan Kabir.
You are NOT a generic chatbot. You are Farhan's personal AI — knowledgeable, intelligent, structured, and beautifully expressive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERSONA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Speak in first person as Farhan's AI representative ("I can tell you...", "Farhan built...", "His research shows...").
- Tone: professional, warm, confident, modern, concise. Never arrogant, never overly casual, never overly formal.
- NEVER start with "Certainly!", "Sure!", "Absolutely!", "I'd be happy to...", "Here's the information...".
- If information is unavailable, say: "I don't have verified information about that yet."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSE STRUCTURE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NEVER generate huge walls of plain text.
- Automatically choose the best layout for the question.
- Use separators (━━━), sections, bullets, tables, code blocks, timelines, checklists, tags, and badges.
- Keep answers scannable with clear hierarchy.
- Emphasize project names, technologies, years, metrics, and achievements using consistent markdown.
- Use tasteful icons sparingly: 🚀 💼 ⚙️ 🧠 📊 🏆 💡 📚 ✨

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSE FRAMEWORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 For project questions:
━━━
🚀 Project Name
━━━
• Overview (1-2 sentences)
• Problem solved
• Architecture & Why this approach?
• Tech Stack (as badges/tags)
• Key features
• Challenges → Solutions
• Results / Metrics
• GitHub / Live demo links if available
• Related projects

📌 For skills questions:
━━━
🧠 Skills
━━━
Group into:
• AI/ML • Frontend • Backend • Cloud • DevOps • Databases • Tools
For each: skill name, experience level, and a real project where it was used.

📌 For experience/career questions:
━━━
💼 Career Journey
━━━
Timeline format:
• Year – Role @ Company
• Responsibilities
• Achievements (with metrics)
• Technologies used

📌 For research questions:
━━━
📚 Research
━━━
• Objective
• Methods / Innovation
• Dataset
• Pipeline
• Key results (as metrics)
• Publication details & citation

📌 For "Why hire Farhan?" questions:
━━━
💼 Executive Summary
━━━
• Engineering strengths
• Business impact
• Technical depth
• Communication & ownership
• Best-fit roles

📌 For contact questions:
━━━
📬 Let's Connect
━━━
• Friendly response
• Email: farhankabir133@gmail.com
• LinkedIn: /in/farhankabir133
• GitHub: @farhankabir133
• Portfolio: farhankabir.me
• Availability status

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOLLOW-UP SUGGESTIONS (REQUIRED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
At the end of EVERY response, add 3-5 relevant follow-up questions as chips:
💡 Want to explore more?
• [Related question 1]
• [Related question 2]
• [Related question 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NEVER fabricate information, projects, dates, or metrics.
- NEVER exaggerate achievements.
- If asked about something not in your knowledge base, say: "I don't have verified information about that yet."
- Always prioritize verified knowledge from the dataset below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RETRIEVED KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${context}`;

      const historyPayload = history && Array.isArray(history) ? history.map((h: any) => ({
        role: h.role === 'user' ? 'user' : 'assistant',
        content: h.content
      })) : [];

      const targetUrl = 'https://api.groq.com/openai/v1/chat/completions';
      const groqRes = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: basePrompt },
            ...historyPayload,
            { role: 'user', content: message }
          ],
          temperature: 0.7
        })
      });

      const data = await groqRes.json();
      if (!groqRes.ok) {
        throw new Error(data.error?.message || 'Groq api error');
      }

      res.json({ reply: data.choices?.[0]?.message?.content || '' });
      return;
    }

    if (path.startsWith('/api/tts') && req.method === 'POST') {
      const { text } = req.body;
      if (!text) {
        res.status(400).json({ error: 'Text content is required' });
        return;
      }
      res.json({ audio: null });
      return;
    }

    if (path.startsWith('/api/summarize-brief') && req.method === 'POST') {
      const { projectType, budget, timeline, goals, comments } = req.body;
      if (!projectType || !goals) {
        res.status(400).json({ error: 'Project Type and Goals are required parameters.' });
        return;
      }

      const promptText = `Analyze the following mission parameters sent to Farhan Kabir, AI Architect:
- Venture Category: ${projectType}
- Capital Boundary: ${budget}
- Temporal Pipeline: ${timeline}
- Objectives: ${goals}
- Operational Directives: ${comments || 'None'}

Please construct a ultra-polished, futuristic, technical "Mission Assessment & Strategy" (3-4 sentences), formatted like an OS diagnostics readout. Detail the technical feasibility, model selection candidates (e.g. BERT variations or custom fine-tuning), and estimated deployment approach. Keep it sharp, professional, and elegant. No markdown headings, just a clean paragraph.`;

      const targetUrl = 'https://api.groq.com/openai/v1/chat/completions';
      const groqRes = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: promptText }],
          temperature: 0.7
        })
      });

      const data = await groqRes.json();
      if (!groqRes.ok) {
        throw new Error(data.error?.message || 'Groq summarizer api error');
      }

      res.json({ summary: data.choices?.[0]?.message?.content || '' });
      return;
    }

    if (path.startsWith('/api/medium-stories') && req.method === 'GET') {
      const cached = getCache('medium-stories');
      if (cached) {
        const etag = generateETag(cached.data);
        const ifNoneMatch = req.headers['if-none-match'];
        res.setHeader('Cache-Control', 'public, max-age=900');
        res.setHeader('ETag', etag);
        res.setHeader('Last-Modified', new Date(cached.fetchedAt).toUTCString());
        if (ifNoneMatch === etag) {
          res.status(304).end();
          return;
        }
        return res.json(cached.data);
      }

      const rssUrl = 'https://medium.com/feed/@farhankabir133';
      const response = await fetch(rssUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (!response.ok) {
        throw new Error(`Medium RSS fetch failed with status: ${response.status}`);
      }

      const xmlText = await response.text();
      const parsedStories = parseMediumRSS(xmlText);

      setCache('medium-stories', parsedStories, 15 * 60 * 1000);
      res.setHeader('Cache-Control', 'public, max-age=900');
      res.json(parsedStories);
      return;
    }

    if (path.startsWith('/api/github-repos') && req.method === 'GET') {
      const cached = getCache('github-repos');
      if (cached) {
        const etag = generateETag(cached.data);
        const ifNoneMatch = req.headers['if-none-match'];
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.setHeader('ETag', etag);
        res.setHeader('Last-Modified', new Date(cached.fetchedAt).toUTCString());
        if (ifNoneMatch === etag) {
          res.status(304).end();
          return;
        }
        return res.json(cached.data);
      }

      const username = 'farhankabir133';
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=100`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'FarhanOS-Portfolio/1.0'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API failed with status: ${response.status}`);
      }

      const repos = await response.json();

      const topRepos = repos
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
          homepage: repo.homepage
        }));

      setCache('github-repos', topRepos, 60 * 60 * 1000);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.json(topRepos);
      return;
    }

    if (path.startsWith('/api/contact') && req.method === 'POST') {
      const { name, email, subject, message, metadata } = req.body;
      if (!email || !message) {
        res.status(400).json({ error: 'Email and message are required fields.' });
        return;
      }

      const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true,
      }) + ' (GMT+6)';

      console.log(`[Message Transmission]: From: ${name || 'N/A'} <${email}>, Subject: ${subject || 'N/A'}`);

      let emailStatus: { sent: boolean; id?: string; error?: string } = { sent: false };

      const promptText = `Analyze the following contact inquiry or strategic mission brief sent to Farhan Kabir:
Sender Name: ${name || 'Anonymous'}
Sender Email: ${email}
Subject: ${subject || 'No Subject'}
Message: ${message}
${metadata ? `Metadata: ${JSON.stringify(metadata)}` : ''}

Provide a JSON object containing:
1. "urgency": "High" | "Medium" | "Low"
2. "inquiryType": "General Inquiry" | "Job Collaboration" | "Research Inquiry" | "Strategic Project Brief"
3. "summaryText": "A 1-sentence diagnostic summary of the message."
4. "suggestedAutoReply": "A professional, personalized 3-sentence email response draft acknowledging their inquiry as Farhan's AI Assistant."

Respond ONLY with valid JSON.`;

      const targetUrl = 'https://api.groq.com/openai/v1/chat/completions';
      const groqRes = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: promptText }],
          temperature: 0.7,
          response_format: { type: 'json_object' }
        })
      });

      const groqData = await groqRes.json();
      if (!groqRes.ok) {
        throw new Error(groqData.error?.message || 'Groq contact api error');
      }

      const analysisText = groqData.choices?.[0]?.message?.content || '{}';
      let analysis: {
        urgency?: string;
        inquiryType?: string;
        summaryText?: string;
        suggestedAutoReply?: string;
      } = {};
      try {
        analysis = JSON.parse(analysisText);
      } catch (_e) {
        // Fallback if parsing failed
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        const emailHtml = `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; color: #111;">
  <h2>New Contact Transmission</h2>
  <p><strong>Name:</strong> ${name || 'Anonymous'}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
  <p><strong>Message:</strong></p>
  <p>${message.replace(/\\n/g, '<br>')}</p>
  ${metadata ? `<pre>${JSON.stringify(metadata, null, 2)}</pre>` : ''}
  <p><strong>Urgency:</strong> ${analysis.urgency || 'Medium'}</p>
  <p><strong>Type:</strong> ${analysis.inquiryType || 'General Inquiry'}</p>
  <p><strong>Summary:</strong> ${analysis.summaryText || 'No analysis available.'}</p>
  <p><strong>Timestamp:</strong> ${timestamp}</p>
</body>
</html>`;

        const emailSubject = `[FarhanOS] ${analysis.urgency === 'High' ? '🔴' : analysis.urgency === 'Medium' ? '🟡' : '🟢'} ${analysis.inquiryType || 'New Message'} from ${name || email}`;

        const emailResult = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Farhan Kabir <contact@farhankabir.me>',
            to: ['farhankabir236@gmail.com'],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        const emailBody = await emailResult.json().catch(() => ({}));
        if (emailResult.ok) {
          emailStatus = { sent: true, id: (emailBody as any).id };
        } else {
          emailStatus = { sent: false, error: (emailBody as any).message || (emailBody as any).error || JSON.stringify(emailBody) };
        }
      } else {
        console.warn('[Contact] RESEND_API_KEY not set — email notification skipped.');
        emailStatus = { sent: false, error: 'RESEND_API_KEY not configured.' };
      }

      res.json({
        success: true,
        message: 'Transmission successfully established and analyzed.',
        analysis,
        emailStatus
      });
      return;
    }

    res.status(404).json({ error: 'API endpoint not found', path, method: req.method });
  } catch (err: any) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message || 'Error occurred.' });
  }
}
