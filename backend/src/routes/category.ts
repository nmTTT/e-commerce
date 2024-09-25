import { Router } from "express";
import { category, getCategoryData } from "../controllers/category";

const router = Router();

router.route("/category").post(category).get(getCategoryData);

export default router;
