import { Router } from "express";
import { category, getCategoryData, size } from "../controllers/category";

const router = Router();

router.route("/category").post(category).get(getCategoryData);
router.route("/size").post(size);

export default router;
