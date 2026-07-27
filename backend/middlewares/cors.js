export function setupCors() {
    const origins = process.env.CORS_ORIGINS?.split(",") || ["*"];
    return {
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (origins.includes("*"))
                return callback(null, true);
            if (origins.includes(origin))
                return callback(null, true);
            try {
                const url = new URL(origin);
                const allowed = origins.some((allowed) => {
                    try {
                        const allowedUrl = new URL(allowed);
                        return (url.hostname === allowedUrl.hostname &&
                            url.protocol === allowedUrl.protocol &&
                            (url.port === allowedUrl.port || !allowedUrl.port));
                    }
                    catch {
                        return false;
                    }
                });
                callback(null, allowed);
            }
            catch {
                callback(null, false);
            }
        },
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["authorization", "x-client-info", "apikey", "content-type"],
        credentials: true,
    };
}
