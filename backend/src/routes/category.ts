import { Router } from "express";
import { category, getCategoryData, size } from "../controllers/category";

const router = Router();

router.route("/").post(category).get(getCategoryData);
router.route("/size").post(size).get();

export default router;
