import { AppError, ValidationError } from "../utils/errors.js";
import { orchestrateSummarizeBrief } from "../services/ai.js";
import { sanitizeString, validateRequired } from "../utils/sanitize.js";
export async function summarizeBrief(req, res) {
    const requestId = crypto.randomUUID();
    try {
        const body = req.body;
        const { valid, missing } = validateRequired(body, ["projectType", "goals"]);
        if (!valid) {
            throw new ValidationError(`Missing required fields: ${missing.join(", ")}`, requestId);
        }
        const sanitizedProjectType = sanitizeString(body.projectType, 100);
        const sanitizedGoals = sanitizeString(body.goals, 5000);
        if (!sanitizedProjectType || !sanitizedGoals) {
            throw new ValidationError("projectType and goals must contain valid content.", requestId);
        }
        const summary = await orchestrateSummarizeBrief({
            projectType: sanitizedProjectType,
            budget: body.budget,
            timeline: body.timeline,
            goals: sanitizedGoals,
            comments: body.comments,
        });
        res.status(200).json({ summary });
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            res.status(400).json({ error: "Invalid JSON in request body." });
            return;
        }
        const statusCode = err instanceof AppError ? err.statusCode : 500;
        res.status(statusCode).json({
            error: err instanceof Error ? err.message : "Internal server error",
        });
    }
}
