import authenticateToken from "../middleware/authenticateToken";
import { getArticle, getArticles } from "../cms";
import { Router } from "express";

const router = Router();

router.get("/", authenticateToken, getArticles);
router.get("/:id", authenticateToken, getArticle);

export const postRouter = router;
