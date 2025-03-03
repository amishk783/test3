import { getCarousel, getHomePage } from "../cms";
import { Router } from "express";

const router = Router();

router.get("/pages/home", getHomePage);
router.get("/carousel", getCarousel);

export const homeRouter = router;
