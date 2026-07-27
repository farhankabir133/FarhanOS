import { AppError } from "./AppError.js";
export class ValidationError extends AppError {
    constructor(message, requestId = "", details) {
        super(message, 400, requestId, details);
        this.name = "ValidationError";
    }
}
