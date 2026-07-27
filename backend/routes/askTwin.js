import { Router } from "express";
import { askTwin } from "../controllers/askTwin.js";
const router = Router();
router.post("/", askTwin);
export default router;
