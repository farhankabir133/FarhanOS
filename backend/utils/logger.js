import pino from "pino";
export const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    formatters: {
        level(label) {
            return { level: label };
        },
    },
    timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
});
export function getRequestLogger(requestId, route) {
    return logger.child({ requestId, route });
}
