import { Router } from "express";
import { logIn, signUp } from "../controllers/auth";

const router = Router();

router.route("/logIn").post(logIn);
router.route("/signUp").post(signUp);

export default router;
