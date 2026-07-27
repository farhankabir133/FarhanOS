import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "../utils/logger.js";
import { setupCors } from "../middlewares/cors.js";
import { setupRateLimiter } from "../middlewares/rateLimiter.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { requestLogger } from "../middlewares/requestLogger.js";
import routes from "../routes/index.js";
const app = express();
app.use(cors(setupCors()));
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(requestLogger);
app.use(setupRateLimiter());
app.use("/api", routes);
app.use(errorHandler);
const PORT = process.env.PORT || 3001;
if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
        logger.info(`Server running on port ${PORT}`);
    });
}
export default app;
