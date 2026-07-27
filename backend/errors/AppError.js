export class AppError extends Error {
    constructor(message, statusCode = 500, requestId = "", details) {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
        this.requestId = requestId;
        this.details = details;
    }
    toJSON() {
        return {
            error: this.message,
            ...(this.details ? { details: this.details } : {}),
            requestId: this.requestId,
        };
    }
}
