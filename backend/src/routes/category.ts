import { Router } from "express";
import { category, getCategoryData, size } from "../controllers/category";
import { getSize } from "../controllers/product";

const router = Router();

router.route("/").post(category).get(getCategoryData);
router.route("/size").post(size).get(getSize);

export default router;
