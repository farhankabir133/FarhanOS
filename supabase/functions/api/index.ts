// Supabase Edge Function: api
// Location: supabase/functions/api/index.ts

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

// ─── Email via Resend ────────────────────────────────────────────────────────
async function sendEmailViaResend(
  resendApiKey: string,
  to: string,
  subject: string,
  html: string
): Promise<{ ok: boolean; error?: string; id?: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Farhan Kabir <contact@farhankabir.me>',
      to: [to],
      subject,
      html,
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const errMsg = (body as any).message || (body as any).error || JSON.stringify(body);
    console.error('[Resend] Email send failed:', errMsg);
    return { ok: false, error: errMsg };
  }
  console.log('[Resend] Email dispatched successfully. ID:', (body as any).id);
  return { ok: true, id: (body as any).id };
}

// ─── Build rich HTML email body ───────────────────────────────────────────────
function buildContactEmailHtml(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
  urgency: string;
  inquiryType: string;
  summaryText: string;
  suggestedAutoReply: string;
  timestamp: string;
}): string {
  const urgencyColor =
    params.urgency === 'High' ? '#ef4444' :
    params.urgency === 'Medium' ? '#f59e0b' :
    '#22c55e';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>FarhanOS — Incoming Transmission</title>
</head>
<body style="margin:0;padding:0;background:#0a0b10;font-family:'Courier New',monospace;color:#e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0b10;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f1117;border:1px solid #1e2130;border-radius:16px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1d2e 0%,#0f1117 100%);padding:28px 32px;border-bottom:1px solid #1e2130;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:10px;letter-spacing:4px;color:#6366f1;text-transform:uppercase;font-weight:700;">FARHANOS.ME — SECURE TRANSMISSION</p>
                    <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:800;letter-spacing:-0.5px;">📡 New Message Received</h1>
                    <p style="margin:4px 0 0;font-size:11px;color:#4b5563;">${params.timestamp}</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${urgencyColor}22;border:1px solid ${urgencyColor}44;color:${urgencyColor};font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
                      ${params.urgency} PRIORITY
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- AI Analysis Banner -->
          <tr>
            <td style="background:#12141f;padding:16px 32px;border-bottom:1px solid #1e2130;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%">
                    <p style="margin:0;font-size:9px;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-weight:700;">INQUIRY TYPE</p>
                    <p style="margin:4px 0 0;font-size:12px;color:#a5b4fc;font-weight:600;">${params.inquiryType}</p>
                  </td>
                  <td width="50%">
                    <p style="margin:0;font-size:9px;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-weight:700;">AI DIAGNOSTICS</p>
                    <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;line-height:1.5;">${params.summaryText}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details -->
          <tr>
            <td style="padding:28px 32px 0;">
              <p style="margin:0 0 16px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ SENDER PROFILE</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1e2130;border-radius:10px;overflow:hidden;">
                <tr style="background:#12141f;">
                  <td style="padding:12px 16px;border-bottom:1px solid #1e2130;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Name</span><br/>
                    <span style="font-size:13px;color:#f1f5f9;font-weight:600;">${params.name || 'Anonymous'}</span>
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid #1e2130;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Email</span><br/>
                    <a href="mailto:${params.email}" style="font-size:13px;color:#6366f1;font-weight:600;text-decoration:none;">${params.email}</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:12px 16px;background:#12141f;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Subject</span><br/>
                    <span style="font-size:13px;color:#f1f5f9;font-weight:600;">${params.subject || 'No Subject'}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding:20px 32px 0;">
              <p style="margin:0 0 12px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ MESSAGE PAYLOAD</p>
              <div style="background:#12141f;border:1px solid #1e2130;border-left:3px solid #6366f1;border-radius:10px;padding:18px 20px;">
                <p style="margin:0;font-size:13px;color:#cbd5e1;line-height:1.75;white-space:pre-wrap;">${params.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>
            </td>
          </tr>

          <!-- Suggested Auto-Reply -->
          <tr>
            <td style="padding:20px 32px 0;">
              <p style="margin:0 0 12px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ AI-SUGGESTED REPLY DRAFT</p>
              <div style="background:#0d1a0d;border:1px solid #1e3a1e;border-left:3px solid #22c55e;border-radius:10px;padding:18px 20px;">
                 <p style="margin:0 0 8px;font-size:9px;color:#4ade80;letter-spacing:2px;text-transform:uppercase;font-weight:700;">✦ AI ANALYSIS — SUGGESTED RESPONSE</p>
                <p style="margin:0;font-size:12px;color:#86efac;line-height:1.75;font-style:italic;">${params.suggestedAutoReply}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Reply CTA -->
          <tr>
            <td style="padding:24px 32px 0;" align="center">
              <a href="mailto:${params.email}?subject=Re: ${encodeURIComponent(params.subject || 'Your message')}"
                style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;border-radius:8px;text-transform:uppercase;">
                ↩ Reply to ${params.name || 'Sender'}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px 28px;border-top:1px solid #1e2130;margin-top:24px;">
              <p style="margin:24px 0 0;font-size:9px;color:#374151;text-align:center;letter-spacing:2px;text-transform:uppercase;">
                FarhanOS Contact System · farhankabir.me · All transmissions encrypted
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Medium RSS Feed Parser ─────────────────────────────────────────────────
async function fetchMediumStories(): Promise<Response> {
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
  const items = xmlText.split('<item>');
  items.shift();

  const parsedStories = items.slice(0, 6).map((item, idx) => {
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
    } catch (_e) { /* fallback */ }

    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/);
    let snippet = '';
    let imageUrl = '';
    let cleanContent = '';

    if (descMatch) {
      const descHtml = descMatch[1];
      const imgMatch = descHtml.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch) imageUrl = imgMatch[1];

      const snippetMatch = descHtml.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);
      if (snippetMatch) snippet = snippetMatch[1].trim();

      cleanContent = descHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      if (!snippet) snippet = cleanContent.slice(0, 150) + (cleanContent.length > 150 ? '...' : '');
    }

    const categories: string[] = [];
    const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(item)) !== null) {
      categories.push(catMatch[1]);
    }

    let finalCategory = 'Life';
    const lc = categories.map(c => c.toLowerCase());
    if (lc.some(c => c.includes('ai') || c.includes('artificial') || c.includes('gpt') || c.includes('llm'))) finalCategory = 'AI';
    else if (lc.some(c => c.includes('dev') || c.includes('coding') || c.includes('program') || c.includes('software') || c.includes('engineering'))) finalCategory = 'Engineering';
    else if (lc.some(c => c.includes('productiv') || c.includes('work') || c.includes('career') || c.includes('growth'))) finalCategory = 'Productivity';
    else if (lc.some(c => c.includes('research') || c.includes('science') || c.includes('clinic'))) finalCategory = 'Research';
    else if (lc.some(c => c.includes('design') || c.includes('ux') || c.includes('ui'))) finalCategory = 'Design';
    else if (lc.some(c => c.includes('startup') || c.includes('business') || c.includes('saas'))) finalCategory = 'Startups';
    else if (lc.some(c => c.includes('philosoph') || c.includes('think'))) finalCategory = 'Philosophy';

    const wordCount = cleanContent.split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 225));

    const guidMatch = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/);
    const rawGuid = guidMatch ? guidMatch[1].trim() : '';
    const guidIdMatch = rawGuid.match(/\/p\/([a-f0-9]+)$/) || link.match(/-([a-f0-9]+)$/) || rawGuid.match(/\/p\/([a-f0-9]+)/);
    const id = guidIdMatch ? guidIdMatch[1] : `medium-${idx}`;

    return { id, title, category: finalCategory, readTime: `${readTimeMins} min read`, date: formattedDate, excerpt: snippet, content: cleanContent || snippet || title, link, imageUrl };
  });

  return new Response(JSON.stringify(parsedStories), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

Deno.serve(async (req: Request) => {
  // Handle CORS Preflight Pre-Requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    // Strip the Supabase function routing prefix (/functions/v1/api or /api)
    // and any trailing slashes to extract just the sub-route (e.g. /ask-twin)
    const path = url.pathname
      .replace(/^\/functions\/v1\/api/, '')
      .replace(/^\/api/, '')
      .replace(/\/+$/, '') || '/';

    const apiKey = Deno.env.get('GROQ_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GROQ_API_KEY environment variable is required but missing.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // --- Endpoint 0: Medium Stories RSS Feed ---
    if (path === '/medium-stories' && req.method === 'GET') {
      return await fetchMediumStories();
    }

    // --- Endpoint 1: Digital Twin AI Chat ---
    if (path === '/ask-twin') {
      const { message, history } = await req.json();
      if (!message) {
        return new Response(
          JSON.stringify({ error: 'Message is required.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const systemPrompt = `You are "FarhanTwin", a state-of-the-art AI clone representing Farhan Kabir.
Farhan Kabir is an AI Engineer, NLP Researcher, Full Stack Developer, and Technical Writer.
Your tone is brilliant, conversational, slightly futuristic (like an operating system interface), and highly precise.
You have absolute knowledge about Farhan's life, work, projects, and research publications.

FARHAN KABIR DATASET:
- Name: Farhan Kabir
- Occupation: AI Engineer & Research Scientist in NLP and Cognitive Diagnostics.
- Current Focus: Evaluating Large Language Models for automated cognitive health screenings and behavioral diagnostics.
- Current Research: Mental-health related text analysis, depression detection, and emotion detection work.
- Key Publications:
  1. "Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs" (25). In IEEE ICCIT. Framework to flag adversarial prompt injection attacks using perplexity metrics.
  2. "AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision" (25). In IEEE ICCIT. Candidate scoring utilizing NLP and posture computer vision tracking.
  3. "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques" (25). In IEEE ECCE. Custom Transformer classifiers (BERT/RoBERTa) mapping clinical emotional states.
  4. "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques" (23). In IEEE ICCIT. RoBERTa models mapping negative pronouns and vocabulary shifts (F1: 0.914).
- Core SaaS Products & Projects:
   1. "TypeRush" - An immersive, atmospheric typing survival game with real-time sound synthesis and adaptive visual themes. (React 19, TailwindCSS, Web Audio API, Express, Groq API, Firebase).
  2. "The Ink Home" - Immersive 3D spatial publication portal syncing Medium RSS feeds into interactive WebGL carousels. (React 18, Vite, Three.js, Framer Motion, TailwindCSS, Node.js).
   3. "SafeSide Predictor" - Tactical football analytics command center providing live match simulations and Poisson risk modeling. (React, Supabase, TailwindCSS, Express, Groq AI, Recharts).
  4. "Multimodal Emotion Recognizer" - Spectrogram bimodal fusion system aligning pitch with BERT embeddings (92.3% accurate).
- Career Timeline:
  - 2026: Architect & Researcher, Cognitive Diagnostics Lab.
  - 2024: Senior AI Developer, Synthetix Solutions.
  - 2022: Full Stack Engineer & NLP Researcher, Mental Health Tech.
  - 2020: Open Source Contributor & Dev, Independent / Farhan Lab.
- Known Tech Stack:
  - AI/ML/NLP: PyTorch, BERT, Transformers, LLM prompt engineering, ONNX quantization, Wav2Vec.
  - Frontend: React, Next.js, Tailwind v4, Framer Motion, D3.js.
  - Backend/DB: Node, Express, Go, Redis, PostgreSQL, Docker, GCP.

RULES FOR CHATTING:
- Answer user queries in the first person ("I built...", "My research focuses on...") as Farhan's Twin.
- Keep answers informative, technically deep, and clean. Avoid fluff.
- Highlight research metrics (e.g. RoBERTa F1: 0.914, Wav2Vec voice analysis) when relevant!
- Integrate subtle futuristic terminal references or OS metaphors if requested or appropriate.`;

      const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
      if (history && Array.isArray(history)) {
        for (const h of history) {
          formattedContents.push({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.content }]
          });
        }
      }
      formattedContents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const targetUrl = 'https://api.groq.com/openai/v1/chat/completions';
      const groqRes = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...(history && Array.isArray(history) ? history.map(h => ({ role: h.role === 'user' ? 'user' : 'assistant', content: h.content })) : []),
            { role: 'user', content: message }
          ],
          temperature: 0.7
        })
      });

      const data = await groqRes.json();
      if (!groqRes.ok) {
        throw new Error(data.error?.message || 'Groq api error');
      }

      const reply = data.choices?.[0]?.message?.content || '';
      return new Response(JSON.stringify({ reply }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // --- Endpoint 2: Audio Speech Synthesis (TTS) ---
    if (path === '/tts') {
      const { text, type } = await req.json();
      if (!text) {
        return new Response(
          JSON.stringify({ error: 'Text content is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify({ audio: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // --- Endpoint 3: Mission Brief Auto-Summarization ---
    if (path === '/summarize-brief') {
      const { projectType, budget, timeline, goals, comments } = await req.json();
      if (!projectType || !goals) {
        return new Response(
          JSON.stringify({ error: 'Project Type and Goals are required parameters.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
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
          'Authorization': `Bearer ${apiKey}`
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

      const summary = data.choices?.[0]?.message?.content || '';
      return new Response(JSON.stringify({ summary }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // --- Endpoint 4: Message Transmission (Contact Form) + Email Delivery ---
    if (path === '/contact') {
      const { name, email, subject, message, metadata } = await req.json();
      if (!email || !message) {
        return new Response(
          JSON.stringify({ error: 'Email and message are required fields.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true,
      }) + ' (GMT+6)';

      console.log(`[Message Transmission]: From: ${name || 'N/A'} <${email}>, Subject: ${subject || 'N/A'}`);

      let emailStatus: { sent: boolean; id?: string; error?: string } = { sent: false };

      // ── Step 1: Run Groq analysis ──────────────────────────────────────────
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
          'Authorization': `Bearer ${apiKey}`
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

      // ── Step 2: Send email notification via Resend ───────────────────────────
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      if (resendApiKey) {
        const emailHtml = buildContactEmailHtml({
          name: name || 'Anonymous',
          email,
          subject: subject || 'No Subject',
          message,
          urgency: analysis.urgency || 'Medium',
          inquiryType: analysis.inquiryType || 'General Inquiry',
          summaryText: analysis.summaryText || 'No analysis available.',
          suggestedAutoReply: analysis.suggestedAutoReply || '',
          timestamp,
        });

        const emailSubject = `[FarhanOS] ${analysis.urgency === 'High' ? '🔴' : analysis.urgency === 'Medium' ? '🟡' : '🟢'} ${analysis.inquiryType || 'New Message'} from ${name || email}`;

        const emailResult = await sendEmailViaResend(
          resendApiKey,
          'farhankabir236@gmail.com',
          emailSubject,
          emailHtml
        );
        emailStatus = emailResult.ok
          ? { sent: true, id: emailResult.id }
          : { sent: false, error: emailResult.error };
      } else {
        console.warn('[Contact] RESEND_API_KEY not set — email notification skipped.');
        emailStatus = { sent: false, error: 'RESEND_API_KEY not configured in Supabase secrets.' };
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Transmission successfully established and analyzed.',
          analysis,
          emailStatus
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Wildcard 404 handler
    return new Response(JSON.stringify({ error: `Endpoint not found: ${path}` }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || 'Error occurred.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
