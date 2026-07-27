import { AppError, ValidationError, ExternalServiceError } from "../utils/errors.js";
export function errorHandler(err, req, res, _next) {
    const origin = req.headers.origin || "";
    const requestId = req.requestId || "";
    if (err instanceof SyntaxError) {
        res.status(400).json({ error: "Invalid JSON in request body." });
        return;
    }
    if (err instanceof AppError) {
        const body = {
            error: err.message,
        };
        if (err.details)
            body.details = err.details;
        if (requestId)
            body.requestId = requestId;
        res.status(err.statusCode).json(body);
        return;
    }
    const statusCode = err instanceof ValidationError
        ? 400
        : err instanceof ExternalServiceError
            ? 502
            : 500;
    const body = {
        error: err.message,
    };
    if (requestId)
        body.requestId = requestId;
    res.status(statusCode).json(body);
}
