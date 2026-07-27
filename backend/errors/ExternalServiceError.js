import { AppError } from "./AppError.js";
export class ExternalServiceError extends AppError {
    constructor(message, requestId = "", details) {
        super(message, 502, requestId, details);
        this.name = "ExternalServiceError";
    }
}
