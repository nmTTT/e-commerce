import { Router } from "express";
import { getAllProduct } from "../controllers/product";

const router = Router();

router.route("/product").get(getAllProduct);

export default router;
