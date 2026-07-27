import { Router } from "express";
import { githubRepos } from "../controllers/githubRepos.js";

const router = Router();

router.get("/", githubRepos);

export default router;