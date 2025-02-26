import { getPosts } from "../cms/post";
import { Router } from "express";

const router = Router();

router.get("/posts", getPosts);

export const postRouter = router;
