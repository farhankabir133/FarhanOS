import { AppError, ValidationError } from "../utils/errors.js";
import { orchestrateAskTwin } from "../services/ai.js";
import { sanitizeString } from "../utils/sanitize.js";
export async function askTwin(req, res) {
    const requestId = crypto.randomUUID();
    try {
        const body = req.body;
        if (!body.message || typeof body.message !== "string") {
            throw new ValidationError("Message is required and must be a non-empty string.", requestId);
        }
        const sanitizedMessage = sanitizeString(body.message, 2000);
        if (!sanitizedMessage) {
            throw new ValidationError("Message contains no valid content after sanitization.", requestId);
        }
        const reply = await orchestrateAskTwin(sanitizedMessage, body.history);
        res.status(200).json({ reply });
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            res.status(400).json({ error: "Invalid JSON in request body." });
            return;
        }
        const statusCode = err instanceof AppError ? err.statusCode : 500;
        const errorBody = {
            error: err instanceof Error ? err.message : String(err),
        };
        if (err instanceof AppError && err.details) {
            errorBody.details = err.details;
        }
        if (requestId) {
            errorBody.requestId = requestId;
        }
        res.status(statusCode).json(errorBody);
    }
}
