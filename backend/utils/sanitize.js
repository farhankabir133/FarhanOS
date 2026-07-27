const STRIP_TAGS_REGEX = /<[^>]*>/g;
const HTML_ENTITY_REGEX = /&[a-zA-Z]+;/g;
const XSS_EVENT_REGEX = /\bon\w+\s*=\s*["'][^"']*["']/gi;
const XSS_URL_REGEX = /(?:javascript|data:text\/html|vbscript):/gi;
const MAX_STRING_LENGTH = 10000;
export function sanitizeString(input, maxLength = MAX_STRING_LENGTH) {
    if (typeof input !== "string") {
        return "";
    }
    if (input.length > maxLength) {
        input = input.slice(0, maxLength);
    }
    let sanitized = input.replace(STRIP_TAGS_REGEX, "");
    sanitized = sanitized.replace(HTML_ENTITY_REGEX, "");
    sanitized = sanitized.replace(XSS_EVENT_REGEX, "");
    sanitized = sanitized.replace(XSS_URL_REGEX, "");
    return sanitized.trim();
}
export function sanitizeEmail(email) {
    if (typeof email !== "string") {
        return "";
    }
    const trimmed = email.trim().toLowerCase();
    if (trimmed.length > 320) {
        return trimmed.slice(0, 320);
    }
    return trimmed;
}
export function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim()) && email.trim().length <= 320;
}
export function sanitizeObject(obj) {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "string") {
            sanitized[key] = sanitizeString(value);
        }
        else if (value && typeof value === "object" && !Array.isArray(value)) {
            sanitized[key] = sanitizeObject(value);
        }
        else {
            sanitized[key] = value;
        }
    }
    return sanitized;
}
export function validateRequired(body, fields) {
    const missing = fields.filter((field) => body[field] === undefined || body[field] === null || (typeof body[field] === "string" && body[field].trim() === ""));
    return { valid: missing.length === 0, missing };
}
