import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  getProduct,
  getSize,
} from "../controllers/product";

const router = Router();

router.route("/get-all").get(getAllProducts).post(createNewProduct);
router.route("/:productId").get(getProduct);
router.route("/get-size").get(getSize);

export default router;
