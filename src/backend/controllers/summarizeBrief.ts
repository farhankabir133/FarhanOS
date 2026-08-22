import { Request, Response } from "express";
import { AppError, ValidationError, ExternalServiceError } from "../utils/errors.js";
import { orchestrateSummarizeBrief } from "../services/ai.js";
import { sanitizeString, validateRequired } from "../utils/sanitize.js";
import { saveBriefRequest } from "../repositories/leads.js";
import type { SummarizeBriefRequest } from "../types/index.js";

export async function summarizeBrief(req: Request, res: Response): Promise<void> {
  const requestId = crypto.randomUUID();

  try {
    const body = req.body as SummarizeBriefRequest;

    const { valid, missing } = validateRequired(body as unknown as Record<string, unknown>, ["projectType", "goals"]);
    if (!valid) {
      throw new ValidationError(
        `Missing required fields: ${missing.join(", ")}`,
        requestId
      );
    }

    const sanitizedProjectType = sanitizeString(body.projectType, 100);
    const sanitizedGoals = sanitizeString(body.goals, 5000);

    if (!sanitizedProjectType || !sanitizedGoals) {
      throw new ValidationError("projectType and goals must contain valid content.", requestId);
    }

    const summary = await orchestrateSummarizeBrief({
      projectType: sanitizedProjectType,
      budget: body.budget,
      timeline: body.timeline,
      goals: sanitizedGoals,
      comments: body.comments,
    });

    // Durable brief record — best-effort, never blocks the response.
    void saveBriefRequest({
      projectType: sanitizedProjectType,
      budget: body.budget,
      timeline: body.timeline,
      goals: sanitizedGoals,
      comments: body.comments,
      email: body.email,
      aiSummary: summary,
    });

    res.status(200).json({ summary });
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