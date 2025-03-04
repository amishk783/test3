import { getPost, getPosts } from "../cms/post";
import { Router } from "express";

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);

export const postRouter = router;
