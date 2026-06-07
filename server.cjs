var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = Number(process.env.PORT) || 3001;
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://farhankabir.me",
    "https://farhankabir133.github.io",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173"
  ];
  const origin = req.headers.origin;
  if (origin && (allowedOrigins.includes(origin) || origin.endsWith(".github.io"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
});
app.use(import_express.default.json({ limit: "10mb" }));
var aiClient = null;
function getAiClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required but missing.");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message, metadata } = req.body;
    if (!email || !message) {
      res.status(400).json({ error: "Email and message are required fields." });
      return;
    }
    console.log(`
--- [MESSAGE TRANSMISSION RECEIVED] ---`);
    console.log(`Timestamp: ${(/* @__PURE__ */ new Date()).toISOString()}`);
    console.log(`Sender: ${name || "Anonymous"} <${email}>`);
    console.log(`Subject: ${subject || "No Subject"}`);
    console.log(`Message Payload:
${message}`);
    if (metadata) {
      console.log(`Metadata Parameters:`, JSON.stringify(metadata, null, 2));
    }
    console.log(`-------------------------------------
`);
    const ai = getAiClient();
    const promptText = `Analyze the following contact inquiry or strategic mission brief sent to Farhan Kabir:
Sender Name: ${name || "Anonymous"}
Sender Email: ${email}
Subject: ${subject || "No Subject"}
Message: ${message}
${metadata ? `Metadata: ${JSON.stringify(metadata)}` : ""}

Provide a JSON object containing:
1. "urgency": "High" | "Medium" | "Low"
2. "inquiryType": "General Inquiry" | "Job Collaboration" | "Research Inquiry" | "Strategic Project Brief"
3. "summaryText": "A 1-sentence diagnostic summary of the message."
4. "suggestedAutoReply": "A professional, personalized 3-sentence email response draft acknowledging their inquiry as Farhan's AI Assistant."

Respond ONLY with valid JSON.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json"
      }
    });
    let analysis = {};
    try {
      analysis = JSON.parse(response.text || "{}");
    } catch (e) {
      console.error("Failed to parse Gemini analysis as JSON:", e);
    }
    res.json({
      success: true,
      message: "Transmission successfully established and analyzed.",
      analysis
    });
  } catch (err) {
    console.error("Error in contact transmission route:", err);
    res.status(500).json({ error: err.message || "Failed to authorize transmission." });
  }
});
app.post("/api/ask-twin", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }
    const ai = getAiClient();
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
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        });
      }
    }
    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7
      }
    });
    res.json({ reply: response.text });
  } catch (err) {
    console.error("Error in ask-twin route:", err);
    res.status(500).json({ error: err.message || "Error occurred while contacting the digital twin." });
  }
});
app.post("/api/tts", async (req, res) => {
  try {
    const { text, type } = req.body;
    if (!text) {
      res.status(400).json({ error: "Text content is required" });
      return;
    }
    const ai = getAiClient();
    const voiceInstruct = type === "tour" ? `Speak in an extremely premium, calm, cinematic, and slightly futuristic synthetic voice of an AI operating system guide. Explain clearly: ${text}` : `Narrate the following article summary with warm, thoughtful, clinical, and precise speech: ${text}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: voiceInstruct }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Kore" }
            // Warm & authoritative feminine
          }
        }
      }
    });
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      res.status(502).json({ error: "Model failed to synthesize voice data." });
      return;
    }
    res.json({ audio: base64Audio });
  } catch (err) {
    console.error("Error in TTS route:", err);
    res.status(500).json({ error: err.message || "Error executing Speech Synthesis." });
  }
});
app.post("/api/summarize-brief", async (req, res) => {
  try {
    const { projectType, budget, timeline, goals, comments } = req.body;
    if (!projectType || !goals) {
      res.status(400).json({ error: "Project Type and Goals are required parameters." });
      return;
    }
    const ai = getAiClient();
    const promptText = `Analyze the following mission parameters sent to Farhan Kabir, AI Architect:
- Venture Category: ${projectType}
- Capital Boundary: ${budget}
- Temporal Pipeline: ${timeline}
- Objectives: ${goals}
- Operational Directives: ${comments || "None"}

Please construct a ultra-polished, futuristic, technical "Mission Assessment & Strategy" (3-4 sentences), formatted like an OS diagnostics readout. Detail the technical feasibility, model selection candidates (e.g. BERT variations or custom fine-tuning), and estimated deployment approach. Keep it sharp, professional, and elegant. No markdown headings, just a clean paragraph.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText
    });
    res.json({ summary: response.text });
  } catch (err) {
    console.error("Error in analyze brief route:", err);
    res.status(500).json({ error: err.message || "Failed to authorize brief analysis." });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FarhanOS full-stack server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
