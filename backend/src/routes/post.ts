import { getArticle, getArticles } from "../cms";
import { Router } from "express";

const router = Router();

router.get("/", getArticles);
router.get("/:id", getArticle);

export const postRouter = router;
