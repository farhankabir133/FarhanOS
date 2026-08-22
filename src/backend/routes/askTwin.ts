import { Router } from "express";
import { askTwin } from "../controllers/askTwin.js";
import { askTwinStream } from "../controllers/askTwinStream.js";

const router = Router();

router.post("/", askTwin);
router.post("/stream", askTwinStream);

export default router;