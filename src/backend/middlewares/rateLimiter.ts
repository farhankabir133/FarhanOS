import { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { config } from "../config/env.js";

export function setupRateLimiter() {
  return rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.maxRequestsPerWindow,
    standardHeaders: true,
    legacyHeaders: false,
    skip: function (req: Request) {
      return req.path === "/api/health";
    },
    handler: function (_req: Request, res: Response) {
      res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
    },
  });
}

export function aiRateLimiter() {
  return rateLimit({
    windowMs: config.aiRateLimit.windowMs,
    max: config.aiRateLimit.maxRequestsPerWindow,
    standardHeaders: true,
    legacyHeaders: false,
    handler: function (_req: Request, res: Response) {
      res.status(429).json({
        error:
          "AI request limit reached. Please wait a minute before trying again.",
      });
    },
  });
}
