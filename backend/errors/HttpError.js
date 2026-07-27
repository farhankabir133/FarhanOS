import { AppError } from "./AppError.js";
export class HttpError extends AppError {
    constructor(message, statusCode = 500, requestId = "", details) {
        super(message, statusCode, requestId, details);
        this.name = "HttpError";
    }
}
