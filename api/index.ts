import crypto from 'node:crypto';

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

let knowledgeLoader: Promise<typeof import('./knowledge-loader')> | null = null;
let knowledgeLoaderError: string | null = null;

async function getKnowledgeLoader() {
  if (!knowledgeLoader && !knowledgeLoaderError) {
    knowledgeLoader = import('./knowledge-loader').catch((err) => {
      knowledgeLoaderError = err instanceof Error ? err.message : String(err);
      console.error('[knowledge] dynamic import failed:', knowledgeLoaderError);
      return null;
    });
  }
  const mod = await knowledgeLoader;
  return mod;
}

const INLINE_SYSTEM_PROMPT = `You are "FK's AI Assistant", a premium personal AI representative of Farhan Kabir. You are NOT a generic chatbot.

INTENT DETECTION:
Before answering, classify the user's intent:
- Micro: Email, Phone, GitHub, LinkedIn, Portfolio, Resume download, Greeting
- Tiny: Contact, Education, Availability, Skills summary
- Standard: About Me, Experience summary, Resume summary, FAQ
- Detailed: Project, Research, Career, Hiring
- Deep Dive: Architecture, Technical question, System design, Engineering discussion

RESPONSE LENGTH RULES:
- Micro: 20–50 words, direct answer only
- Tiny: 50–120 words, minimal context
- Standard: 120–250 words, structured but concise
- Detailed: 250–500 words, include relevant sections
- Deep Dive: 500+ words only for technical/architecture topics

DIRECTNESS RULES:
- If asked "What is your email?" → return ONLY the email
- If asked "Phone number?" → return ONLY the phone number
- If asked "GitHub?" → return ONLY the GitHub profile
- If asked "LinkedIn?" → return ONLY the LinkedIn profile
- If asked "Portfolio?" → return ONLY the portfolio link
- If asked "Resume?" → return ONLY the resume info
- Answer EXACTLY what was asked. Do not add projects, experience, or related topics unless requested.

FORMATTING RULES:
- Use clear headings and short paragraphs
- Use bullet lists and tables where helpful
- Avoid excessive markdown emphasis (no bold/italic unless really needed)
- No ALL CAPS, no repeated punctuation
- No decorative emojis unless they improve navigation
- The frontend handles visual styling; focus on content structure

WHEN TO SHOW EXTRA SECTIONS:
- Knowledge Sources: only for detailed/deep-dive answers
- Related Topics: only when they add clear value
- Confidence: only when information is uncertain
- Hide extras for: Contact, Email, Phone, GitHub, LinkedIn, Portfolio, Greeting, Simple FAQs

RESPONSE QUALITY:
- Did I answer exactly what was asked?
- Did I add unnecessary information?
- Can this be shorter?
- Does this feel premium and precise?

KNOWLEDGE RULES:
- NEVER fabricate information, projects, dates, or metrics.
- NEVER exaggerate achievements.
- If information is unavailable, say: "I don't have verified information about that yet."
- Always prioritize verified information from the retrieved knowledge below.`;

const FARHAN_DATASET = `
FARHAN KABIR DATASET:
Name: Farhan Kabir
Occupation: AI Engineer & Research Scientist in NLP and Cognitive Diagnostics
Current Focus: Evaluating LLMs for automated cognitive health screenings and behavioral diagnostics
Current Research: Mental-health text analysis, depression detection, emotion detection

Key Publications:
1. "Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs" (2025, IEEE ICCIT)
2. "AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision" (2025, IEEE ICCIT)
3. "Emotion Detection From Textual Data Using NLP and Machine Learning Techniques" (2025, IEEE ECCE)
4. "Depression Detection From Social Media Textual Data Using NLP and Machine Learning Techniques" (2023, IEEE ICCIT)

Core Projects:
1. TypeRush (2024-2025) - React 19, TailwindCSS, Web Audio API, Express, Groq API, Firebase
2. The Ink Home (2025-Present) - React 18, Vite, Three.js, Framer Motion, TailwindCSS, Node.js
3. SafeSide Predictor (2025-Present) - React, Supabase, TailwindCSS, Express, Groq AI, Recharts
4. Multimodal Emotion Recognizer (2023) - Python, BERT, Wav2Vec 2.0, React, FastAPI
5. FarhanOS (2026-Present) - React, TailwindCSS, Framer Motion, Express, Groq API
6. RankFlow AI (2025) - Python, FastAPI, PostgreSQL, Docker, React
7. Exam-Survival (2025) - React, TypeScript, Supabase, Groq AI, PWA
8. BuildSafe (2024-2025) - React, Supabase, TailwindCSS, Express, PostGIS
9. Buddy-Script (2024-2025) - React, Groq API, Monaco Editor, WebSocket, Node.js
10. AutoSpark (2024) - React, Node.js, Redis, GraphQL, BullMQ
11. OMNIVA AI (2025) - React, Go, Prometheus, Grafana, TensorFlow
12. codelab-ai-genkit-rag (2025) - Python, LangChain, ChromaDB, FastAPI, Next.js

Career Timeline:
- 2026: Architect & Researcher, Cognitive Diagnostics Lab
- 2024: Senior AI Developer, Synthetix Solutions
- 2022: Full Stack Engineer & NLP Researcher, Mental Health Tech
- 2020: Open Source Contributor & Dev, Independent / Farhan Lab

Tech Stack:
- AI/ML: PyTorch, BERT, Transformers, LLM prompt engineering, ONNX quantization, Wav2Vec
- Frontend: React, Next.js, Tailwind v4, Framer Motion, D3.js
- Backend/DB: Node, Express, Go, Redis, PostgreSQL, Docker, GCP
- Specialties: Multi-agent workflows, RAG, computer vision, speech recognition, clinical NLP

Certifications: 15+ including Cisco ML, DeepLearning.AI, MongoDB, Alteryx, Oracle Java, Meta Frontend Developer.

Skills Graph: PyTorch (5), Large Language Models (5), Clinical NLP Pipelines (5), Hugging Face & BERT (5), React/Next.js (5), Node.js & Express (5), PostgreSQL (5), Docker (5), Git & Linux (5), Tailwind CSS v4 (5), Go (4), Redis (4), Academic Research (5), Mental Health Tech (5)`;

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
      let ragUsed = false;
      try {
        const loader = await getKnowledgeLoader();
        if (loader) {
          const docs = loader.searchKnowledge(message, { topK: 6, featuredOnly: false });
          context = docs.map(d => `## ${d.title}\n${d.content}`).join('\n\n---\n\n');
          ragUsed = docs.length > 0;
        }
      } catch (err) {
        console.error('RAG retrieval failed, falling back to inline prompt', err);
      }

      const basePrompt = ragUsed
        ? `${INLINE_SYSTEM_PROMPT}\n\n${FARHAN_DATASET}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRETRIEVED KNOWLEDGE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${context}`
        : `${INLINE_SYSTEM_PROMPT}\n\n${FARHAN_DATASET}`;

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
