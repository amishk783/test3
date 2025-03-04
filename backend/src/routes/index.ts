import { getHomePage } from "../cms";
import { Router } from "express";

const router = Router();

router.get("/pages/home", getHomePage);

export const homeRouter = router;
