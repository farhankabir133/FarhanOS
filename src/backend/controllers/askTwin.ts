import { Request, Response } from "express";
import { AppError, ValidationError, ExternalServiceError } from "../utils/errors.js";
import { orchestrateAskTwin } from "../services/ai.js";
import { sanitizeString } from "../utils/sanitize.js";
import { ensureSession, logTwinTurn } from "../repositories/chatLogs.js";
import type { AskTwinRequest } from "../types/index.js";

export async function askTwin(req: Request, res: Response): Promise<void> {
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

    const sessionId = await ensureSession(body.sessionId).catch(() => null);

    const reply = await orchestrateAskTwin(
      sanitizedMessage,
      body.history
    );

    if (sessionId && reply.trim()) {
      await logTwinTurn(sessionId, [
        { role: "user", content: sanitizedMessage },
        { role: "assistant", content: reply },
      ]).catch(() => undefined);
    }

    res.status(200).json({ reply, ...(sessionId ? { sessionId } : {}) });
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: "Invalid JSON in request body." });
      return;
    }
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const errorBody: { error: string; details?: string; requestId?: string } = {
      error: err instanceof Error ? err.message : String(err),
    };
    if (err instanceof AppError && err.details) {
      errorBody.details = err.details;
    }
    if (requestId) {
      errorBody.requestId = requestId;
    }
    res.status(statusCode).json(errorBody);
  }
}