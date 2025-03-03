import { getCarousel } from "../cms";
import { Router } from "express";

const router = Router();

router.get("/carousel", getCarousel);

export const homeRouter = router;
