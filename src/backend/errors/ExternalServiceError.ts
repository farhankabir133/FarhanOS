import { AppError } from "./AppError.js";

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