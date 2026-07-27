import { AppError } from "./AppError.js";

export class ValidationError extends AppError {
  constructor(message: string, requestId: string = "", details?: string) {
    super(message, 400, requestId, details);
    this.name = "ValidationError";
  }
}