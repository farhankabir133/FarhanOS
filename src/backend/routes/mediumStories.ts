import { Router } from "express";
import { mediumStories } from "../controllers/mediumStories.js";

const router = Router();

router.get("/", mediumStories);

export default router;