import { config } from "../config/env.js";
import { AppError, ValidationError, ExternalServiceError } from "../utils/errors.js";
import { orchestrateContactAnalysis } from "../services/ai.js";
import { sendContactEmail } from "../services/email.js";
import { sanitizeString, sanitizeEmail, isValidEmail, sanitizeObject, validateRequired } from "../utils/sanitize.js";
export async function contact(req, res) {
    const requestId = crypto.randomUUID();
    try {
        const rawBody = req.body;
        const body = sanitizeObject(rawBody);
        const { valid, missing } = validateRequired(body, ["email", "message"]);
        if (!valid) {
            throw new ValidationError(`Missing required fields: ${missing.join(", ")}`, requestId);
        }
        if (!isValidEmail(body.email)) {
            throw new ValidationError("A valid email address is required.", requestId);
        }
        const sanitizedEmail = sanitizeEmail(body.email);
        const sanitizedName = sanitizeString(body.name || "", 100);
        const sanitizedSubject = sanitizeString(body.subject || "", 200);
        const sanitizedMessage = sanitizeString(body.message, 5000);
        console.log(`[Message Transmission]: From: ${sanitizedName || "N/A"} <${sanitizedEmail}>, Subject: ${sanitizedSubject || "N/A"}`);
        let emailStatus = { sent: false };
        const apiKey = config.groq.apiKey;
        if (!apiKey) {
            throw new ExternalServiceError("GROQ_API_KEY is not configured.", requestId);
        }
        const analysisText = await orchestrateContactAnalysis({
            name: sanitizedName,
            email: sanitizedEmail,
            subject: sanitizedSubject,
            message: sanitizedMessage,
            metadata: body.metadata,
        });
        let analysis = {};
        try {
            analysis = JSON.parse(analysisText);
        }
        catch (_e) {
            console.warn("[Contact] Failed to parse Groq analysis response:", analysisText);
        }
        const resendApiKey = config.resend.apiKey;
        if (resendApiKey) {
            const emailSubject = `[FarhanOS] ${analysis.urgency === "High" ? "🔴" : analysis.urgency === "Medium" ? "🟡" : "🟢"} ${analysis.inquiryType || "New Message"} from ${sanitizedName || sanitizedEmail}`;
            const emailResult = await sendContactEmail({
                name: sanitizedName || "Anonymous",
                email: sanitizedEmail,
                subject: emailSubject,
                message: sanitizedMessage,
                urgency: analysis.urgency || "Medium",
                inquiryType: analysis.inquiryType || "General Inquiry",
                summaryText: analysis.summaryText || "No analysis available.",
                suggestedAutoReply: analysis.suggestedAutoReply || "",
            });
            emailStatus = emailResult.sent
                ? { sent: true, id: emailResult.id }
                : { sent: false, error: emailResult.error };
        }
        else {
            console.warn("[Contact] RESEND_API_KEY not set — email notification skipped.");
            emailStatus = { sent: false, error: "RESEND_API_KEY not configured." };
        }
        res.status(200).json({
            success: true,
            message: "Transmission successfully established and analyzed.",
            analysis,
            emailStatus,
        });
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
