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