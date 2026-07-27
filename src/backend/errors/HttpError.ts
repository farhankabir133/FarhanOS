import { AppError } from "./AppError.js";

export class HttpError extends AppError {
  constructor(
    message: string,
    statusCode: number = 500,
    requestId: string = "",
    details?: string
  ) {
    super(message, statusCode, requestId, details);
    this.name = "HttpError";
  }
}