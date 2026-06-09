import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

// CORS Middleware to enable communication with static frontend on custom domain
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://farhankabir.me',
    'https://farhankabir133.github.io',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173'
  ];
  const origin = req.headers.origin;
  if (origin && (allowedOrigins.includes(origin) || origin.endsWith('.github.io'))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use(express.json({ limit: '10mb' }));

// Lazy initializer for Google GenAI Client
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is required but missing.');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// 0. Message Transmission (Contact & Brief Dispatch) Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, metadata } = req.body;
    if (!email || !message) {
      res.status(400).json({ error: 'Email and message are required fields.' });
      return;
    }

    console.log(`\n--- [MESSAGE TRANSMISSION RECEIVED] ---`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Sender: ${name || 'Anonymous'} <${email}>`);
    console.log(`Subject: ${subject || 'No Subject'}`);
    console.log(`Message Payload:\n${message}`);
    if (metadata) {
      console.log(`Metadata Parameters:`, JSON.stringify(metadata, null, 2));
    }
    console.log(`-------------------------------------\n`);

    const ai = getAiClient();
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        responseMimeType: 'application/json',
      }
    });

    let analysis = {};
    try {
      analysis = JSON.parse(response.text || '{}');
    } catch (e) {
      console.error('Failed to parse Gemini analysis as JSON:', e);
    }

    res.json({
      success: true,
      message: 'Transmission successfully established and analyzed.',
      analysis
    });
  } catch (err: any) {
    console.error('Error in contact transmission route:', err);
    res.status(500).json({ error: err.message || 'Failed to authorize transmission.' });
  }
});

// 1. Digital Twin AI Chat Endpoint
app.post('/api/ask-twin', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: 'Message is required.' });
      return;
    }

    const ai = getAiClient();

    // Context detailing Farhan's biography, achievements, and papers
    const systemPrompt = `You are "FarhanTwin", a state-of-the-art AI clone representing Farhan Kabir.
Farhan Kabir is an AI Engineer, NLP Researcher, Full Stack Developer, and Technical Writer.
Your tone is brilliant, conversational, slightly futuristic (like an operating system interface), and highly precise.
You have absolute knowledge about Farhan's life, work, projects, and research publications.

FARHAN KABIR DATASET:
- Name: Farhan Kabir
- Occupation: AI Engineer & Research Scientist in NLP and Cognitive Diagnostics.
- Current Focus: Evaluating Large Language Models for automated cognitive health screenings and behavioral diagnostics.
- Current Research: Ment-health related text analysis, depression detection, and emotion detection work.
- Key Publications:
  1. "Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs" (25). In IEEE ICCIT. Framework to flag adversarial prompt injection attacks using perplexity metrics.
  2. "AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision" (25). In IEEE ICCIT. Candidate scoring utilizing NLP and posture computer vision tracking.
  3. "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques" (25). In IEEE ECCE. Custom Transformer classifiers (BERT/RoBERTa) mapping clinical emotional states.
  4. "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques" (23). In IEEE ICCIT. RoBERTa models mapping negative pronouns and vocabulary shifts (F1: 0.914).
- Core SaaS Products & Projects:
  1. "TypeRush" - An immersive, atmospheric typing survival game with real-time sound synthesis and adaptive visual themes. (React 19, TailwindCSS, Web Audio API, Express, Gemini API, Firebase).
  2. "The Ink Home" - Immersive 3D spatial publication portal syncing Medium RSS feeds into interactive WebGL carousels. (React 18, Vite, Three.js, Framer Motion, TailwindCSS, Node.js).
  3. "SafeSide Predictor" - Tactical football analytics command center providing live match simulations and Poisson risk modeling. (React, Supabase, TailwindCSS, Express, Gemini AI, Recharts).
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

    const formattedContents = [];
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (err: any) {
    console.error('Error in ask-twin route:', err);
    res.status(500).json({ error: err.message || 'Error occurred while contacting the digital twin.' });
  }
});

// 2. Audio Speech Synthesis (TTS) Endpoint
app.post('/api/tts', async (req, res) => {
  try {
    const { text, type } = req.body;
    if (!text) {
      res.status(400).json({ error: 'Text content is required' });
      return;
    }

    const ai = getAiClient();

    // Use gemini-3.1-flash-tts-preview to generate TTS
    const voiceInstruct = type === 'tour' 
      ? `Speak in an extremely premium, calm, cinematic, and slightly futuristic synthetic voice of an AI operating system guide. Explain clearly: ${text}`
      : `Narrate the following article summary with warm, thoughtful, clinical, and precise speech: ${text}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: [{ parts: [{ text: voiceInstruct }] }],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // Warm & authoritative feminine
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      res.status(502).json({ error: 'Model failed to synthesize voice data.' });
      return;
    }

    res.json({ audio: base64Audio });
  } catch (err: any) {
    console.error('Error in TTS route:', err);
    res.status(500).json({ error: err.message || 'Error executing Speech Synthesis.' });
  }
});

// 3. Mission Brief Auto-Summarization Endpoint
app.post('/api/summarize-brief', async (req, res) => {
  try {
    const { projectType, budget, timeline, goals, comments } = req.body;
    if (!projectType || !goals) {
      res.status(400).json({ error: 'Project Type and Goals are required parameters.' });
      return;
    }

    const ai = getAiClient();
    const promptText = `Analyze the following mission parameters sent to Farhan Kabir, AI Architect:
- Venture Category: ${projectType}
- Capital Boundary: ${budget}
- Temporal Pipeline: ${timeline}
- Objectives: ${goals}
- Operational Directives: ${comments || 'None'}

Please construct a ultra-polished, futuristic, technical "Mission Assessment & Strategy" (3-4 sentences), formatted like an OS diagnostics readout. Detail the technical feasibility, model selection candidates (e.g. BERT variations or custom fine-tuning), and estimated deployment approach. Keep it sharp, professional, and elegant. No markdown headings, just a clean paragraph.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
    });

    res.json({ summary: response.text });
  } catch (err: any) {
    console.error('Error in analyze brief route:', err);
    res.status(500).json({ error: err.message || 'Failed to authorize brief analysis.' });
  }
});

// 4. Dynamic Medium Stories Fetching Endpoint
app.get('/api/medium-stories', async (req, res) => {
  try {
    const rssUrl = 'https://medium.com/feed/@farhankabir133';
    
    // Fetch feed from Medium
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Medium RSS fetch failed with status: ${response.status}`);
    }

    const xmlText = await response.text();
    
    // Split XML by <item> elements
    const items = xmlText.split('<item>');
    items.shift(); // remove the channel header block
    
    const parsedStories = items.slice(0, 6).map((item, idx) => {
      // Extract title
      const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/);
      const title = titleMatch ? titleMatch[1].trim() : '';

      // Extract link
      const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
      const link = linkMatch ? linkMatch[1].trim() : '';

      // Extract pubDate
      const pubDateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const rawDate = pubDateMatch ? pubDateMatch[1].trim() : '';
      // Format: Sat, 06 Jun 2026 14:01:38 GMT -> Jun 6, 2026
      let formattedDate = rawDate;
      try {
        const d = new Date(rawDate);
        if (!isNaN(d.getTime())) {
          formattedDate = d.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
        }
      } catch (e) {
        // Fallback
      }

      // Extract description HTML
      const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/);
      let snippet = '';
      let imageUrl = '';
      let cleanContent = '';

      if (descMatch) {
        const descHtml = descMatch[1];
        
        // Extract image
        const imgMatch = descHtml.match(/<img[^>]+src=["']([^"']+)["']/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }

        // Extract snippet
        const snippetMatch = descHtml.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);
        if (snippetMatch) {
          snippet = snippetMatch[1].trim();
        }

        // Strip HTML tags for clean text content
        cleanContent = descHtml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        
        if (!snippet) {
          snippet = cleanContent.slice(0, 150) + (cleanContent.length > 150 ? '...' : '');
        }
      }

      // Extract categories
      const categories: string[] = [];
      const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
      let catMatch;
      while ((catMatch = catRegex.exec(item)) !== null) {
        categories.push(catMatch[1]);
      }

      // Determine category mapping
      let finalCategory: 'AI' | 'Engineering' | 'Productivity' | 'Research' | 'Life' | 'Startups' | 'Design' | 'Philosophy' = 'Life';
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

      // Calculate read time
      const wordCount = cleanContent.split(/\s+/).length;
      const readTimeMins = Math.max(1, Math.ceil(wordCount / 225));
      const readTime = `${readTimeMins} min read`;

      // Extract post ID from guid/link
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

    res.json(parsedStories);
  } catch (err: any) {
    console.error('Error fetching Medium RSS:', err);
    res.status(500).json({ error: err.message || 'Failed to fetch Medium stories' });
  }
});

// Main Server Boot & Vite Integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`FarhanOS full-stack server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
