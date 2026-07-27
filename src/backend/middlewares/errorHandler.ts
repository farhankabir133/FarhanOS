import { Request, Response, NextFunction } from "express";
import { AppError, ValidationError, ExternalServiceError } from "../utils/errors.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const origin = req.headers.origin || "";
  const requestId = (req as Request & { requestId?: string }).requestId || "";

  if (err instanceof SyntaxError) {
    res.status(400).json({ error: "Invalid JSON in request body." });
    return;
  }

  if (err instanceof AppError) {
    const body: { error: string; details?: string; requestId?: string } = {
      error: err.message,
    };
    if (err.details) body.details = err.details;
    if (requestId) body.requestId = requestId;
    res.status(err.statusCode).json(body);
    return;
  }

  const statusCode =
    err instanceof ValidationError
      ? 400
      : err instanceof ExternalServiceError
        ? 502
        : 500;

  const body: { error: string; requestId?: string } = {
    error: err.message,
  };
  if (requestId) body.requestId = requestId;

  res.status(statusCode).json(body);
}