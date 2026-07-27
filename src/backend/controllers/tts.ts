import { Request, Response } from "express";
import { AppError, ValidationError } from "../utils/errors.js";
import { config } from "../config/env.js";
import type { TtsRequest, TtsResponse } from "../types/index.js";

export async function tts(req: Request, res: Response): Promise<void> {
  const requestId = crypto.randomUUID();

  try {
    const body = req.body as TtsRequest;

    if (!body.text || typeof body.text !== "string") {
      throw new ValidationError("Text content is required.", requestId);
    }

    if (body.text.length > 5000) {
      throw new ValidationError("Text exceeds maximum length of 5000 characters.", requestId);
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      res.status(200).json({
        audio: null,
        method: "client",
        message: "Server-side TTS requires GROQ_API_KEY to be configured.",
      });
      return;
    }

    res.status(200).json({
      audio: null,
      method: "client",
      message: "TTS is handled client-side via Web Speech API. Provide GROQ_API_KEY for future server-side support.",
    });
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: "Invalid JSON in request body." });
      return;
    }
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    res.status(statusCode).json({
      error: err instanceof Error ? err.message : "Internal server error",
    });
  }
}