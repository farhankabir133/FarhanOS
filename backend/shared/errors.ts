export class AppError extends Error {
  public readonly statusCode: number;
  public readonly requestId: string;
  public readonly details?: string;

  constructor(
    message: string,
    statusCode: number = 500,
    requestId: string = "",
    details?: string
  ) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.requestId = requestId;
    this.details = details;
  }

  toJSON(): { error: string; details?: string; requestId: string } {
    return {
      error: this.message,
      ...(this.details ? { details: this.details } : {}),
      requestId: this.requestId,
    };
  }
}

export class ValidationError extends AppError {
  constructor(message: string, requestId: string = "", details?: string) {
    super(message, 400, requestId, details);
    this.name = "ValidationError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized", requestId: string = "") {
    super(message, 401, requestId);
    this.name = "UnauthorizedError";
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = "Too many requests", requestId: string = "") {
    super(message, 429, requestId);
    this.name = "RateLimitError";
  }
}

export class ExternalServiceError extends AppError {
  constructor(
    message: string,
    requestId: string = "",
    details?: string
  ) {
    super(message, 502, requestId, details);
    this.name = "ExternalServiceError";
  }
}

export function isAppError(err: unknown): err is AppError {
  return err instanceof AppError;
}