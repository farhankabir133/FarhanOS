import { Router } from "express";
import healthRouter from "./health.js";
import mediumStoriesRouter from "./mediumStories.js";
import githubReposRouter from "./githubRepos.js";
import askTwinRouter from "./askTwin.js";
import summarizeBriefRouter from "./summarizeBrief.js";
import contactRouter from "./contact.js";
import { aiRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

const aiLimiter = aiRateLimiter();

router.use("/health", healthRouter);
router.use("/medium-stories", mediumStoriesRouter);
router.use("/github-repos", githubReposRouter);
router.use("/ask-twin", aiLimiter, askTwinRouter);
router.use("/summarize-brief", aiLimiter, summarizeBriefRouter);
router.use("/contact", aiLimiter, contactRouter);

export default router;