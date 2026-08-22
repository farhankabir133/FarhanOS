import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import compression from "compression";
import type { Request, Response, RequestHandler } from "express";
import { logger } from "../utils/logger.js";
import { setupCors } from "../middlewares/cors.js";
import { setupRateLimiter } from "../middlewares/rateLimiter.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { requestLogger } from "../middlewares/requestLogger.js";
import routes from "../routes/index.js";

const app = express();

// Never compress SSE streams — it buffers token deltas and breaks streaming UX.
const shouldCompress = (_req: Request, res: Response): boolean => {
  if (res.getHeader("Content-Type")?.toString().includes("text/event-stream")) {
    return false;
  }
  return compression.filter(_req, res);
};

// cors/helmet/compression/pino-http each bundle their own nested copy of
// @types/express-serve-static-core, which is structurally identical but
// nominally distinct from ours — bridge them at the registration boundary.
const useMiddleware = (middleware: unknown) => {
  app.use(middleware as RequestHandler);
};

useMiddleware(cors(setupCors()));
useMiddleware(helmet());
useMiddleware(compression({ filter: shouldCompress }));
useMiddleware(express.json({ limit: "10mb" }));
useMiddleware(requestLogger);
useMiddleware(setupRateLimiter());
app.use("/api", routes);
useMiddleware(errorHandler);

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`Server running on port ${PORT}`);
});

export default app;