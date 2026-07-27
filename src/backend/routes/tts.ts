import { Router } from "express";
import { tts } from "../controllers/tts.js";

const router = Router();

router.post("/", tts);

export default router;