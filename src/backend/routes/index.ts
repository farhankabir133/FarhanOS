import { Router } from "express";
import healthRouter from "./health.js";
import mediumStoriesRouter from "./mediumStories.js";
import githubReposRouter from "./githubRepos.js";
import askTwinRouter from "./askTwin.js";
import ttsRouter from "./tts.js";
import summarizeBriefRouter from "./summarizeBrief.js";
import contactRouter from "./contact.js";

const router = Router();

router.use("/health", healthRouter);
router.use("/medium-stories", mediumStoriesRouter);
router.use("/github-repos", githubReposRouter);
router.use("/ask-twin", askTwinRouter);
router.use("/tts", ttsRouter);
router.use("/summarize-brief", summarizeBriefRouter);
router.use("/contact", contactRouter);

export default router;