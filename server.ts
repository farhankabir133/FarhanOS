import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import compression from "compression";
import { CONFIG } from "./backend/shared/config.ts";
import { handlerAskTwin } from "./backend/shared/routes/askTwin.ts";
import { handlerTts } from "./backend/shared/routes/tts.ts";
import { handlerSummarizeBrief } from "./backend/shared/routes/summarizeBrief.ts";
import { handlerMediumStories } from "./backend/shared/routes/mediumStories.ts";
import { handlerGithubRepos } from "./backend/shared/routes/githubRepos.ts";
import { handlerContact } from "./backend/shared/routes/contact.ts";
import { handlerHealth } from "./backend/shared/routes/health.ts";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || CONFIG.server.port;

function adapterRoute(handler: (req: Request) => Promise<Response>): express.RequestHandler {
  return async (req, res) => {
    const request = new Request(`http://localhost:${PORT}${req.originalUrl}`, {
      method: req.method,
      headers: Object.fromEntries(
        Object.entries(req.headers).map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : v ?? ""])
      ),
      body: req.body ? JSON.stringify(req.body) : undefined,
    });

    try {
      const response = await handler(request);
      const body = await response.text();
      res.status(response.status).set(response.headers).send(body);
    } catch (err: unknown) {
      res.status(500).json({ error: err instanceof Error ? err.message : "Internal server error" });
    }
  };
}

app.use(compression({ threshold: CONFIG.server.compressionThreshold }));
app.use(express.json({ limit: CONFIG.server.jsonLimit }));

app.get("/api/health", adapterRoute(handlerHealth));
app.get("/api/medium-stories", adapterRoute(handlerMediumStories));
app.get("/api/github-repos", adapterRoute(handlerGithubRepos));
app.post("/api/ask-twin", adapterRoute(handlerAskTwin));
app.post("/api/tts", adapterRoute(handlerTts));
app.post("/api/summarize-brief", adapterRoute(handlerSummarizeBrief));
app.post("/api/contact", adapterRoute(handlerContact));

if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(process.cwd(), "public")));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
  });
} else {
  app.use(express.static(path.join(process.cwd(), "dist"), { maxAge: "1y", immutable: true }));
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.join(process.cwd(), "dist", "index.html"));
  });
}

app.listen(PORT, CONFIG.server.host, () => {
  console.log(`FarhanOS full-stack server listening on http://${CONFIG.server.host}:${PORT}`);
});