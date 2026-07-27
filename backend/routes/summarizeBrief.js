import { Router } from "express";
import { summarizeBrief } from "../controllers/summarizeBrief.js";
const router = Router();
router.post("/", summarizeBrief);
export default router;
