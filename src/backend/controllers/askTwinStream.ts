import { Request, Response } from "express";
import { ValidationError } from "../utils/errors.js";
import { orchestrateAskTwinStream } from "../services/ai.js";
import { sanitizeString } from "../utils/sanitize.js";
import { ensureSession, logTwinTurn } from "../repositories/chatLogs.js";
import type { AskTwinRequest } from "../types/index.js";

export async function askTwinStream(req: Request, res: Response): Promise<void> {
  const requestId = crypto.randomUUID();

  try {
    const body = req.body as AskTwinRequest;

    if (!body.message || typeof body.message !== "string") {
      throw new ValidationError("Message is required and must be a non-empty string.", requestId);
    }

    const sanitizedMessage = sanitizeString(body.message, 2000);

    if (!sanitizedMessage) {
      throw new ValidationError("Message contains no valid content after sanitization.", requestId);
    }

    const upstream = await orchestrateAskTwinStream(sanitizedMessage, body.history);

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });

    const send = (obj: unknown) => {
      if (!res.writableEnded) res.write(`data: ${JSON.stringify(obj)}\n\n`);
    };

    // Best-effort persistence: identify/create the conversation session.
    let sessionId: string | null = null;
    try {
      sessionId = await ensureSession(body.sessionId);
      if (sessionId) send({ sessionId });
    } catch {
      // persistence unavailable — continue without it
    }

    const reader = upstream.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let fullReply = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const raw of lines) {
          const line = raw.trim();
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const chunk = JSON.parse(payload) as {
              choices?: Array<{ delta?: { content?: string } }>;
            };
            const delta = chunk.choices?.[0]?.delta?.content;
            if (delta) {
              fullReply += delta;
              send({ delta });
            }
          } catch {
            // skip malformed chunk
          }
        }
      }
      send({ done: true });
      await logTwinTurn(sessionId, [
        { role: "user", content: sanitizedMessage },
        ...(fullReply.trim()
          ? [{ role: "assistant" as const, content: fullReply }]
          : []),
      ]);
    } catch (streamErr) {
      send({ error: streamErr instanceof Error ? streamErr.message : "Streaming failed." });
    } finally {
      if (!res.writableEnded) res.end();
    }
  } catch (err: unknown) {
    if (res.headersSent) {
      try {
        res.write(`data: ${JSON.stringify({ error: err instanceof Error ? err.message : String(err) })}\n\n`);
        res.end();
      } catch {
        // client gone
      }
      return;
    }
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: "Invalid JSON in request body." });
      return;
    }
    const statusCode = err instanceof ValidationError ? 400 : 500;
    res.status(statusCode).json({
      error: err instanceof Error ? err.message : String(err),
      requestId,
    });
  }
}
