import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product";

const router = Router();

router.route("/get-all").get(getAllProducts).post(createNewProduct);
router.route("/:productId").get(getProduct);

export default router;
