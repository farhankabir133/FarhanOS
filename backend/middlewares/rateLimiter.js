import rateLimit from "express-rate-limit";
export function setupRateLimiter() {
    return rateLimit({
        windowMs: 60000,
        max: 60,
        standardHeaders: true,
        legacyHeaders: false,
        skipSuccessfulRequests: true,
        skip: function (req) {
            return req.path === "/api/health";
        },
        handler: function (_req, res) {
            res.status(429).json({
                error: "Too many requests. Please try again later.",
            });
        },
    });
}
