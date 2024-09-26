import { Router } from "express";
import { logIn, signUp, getCurrentUser } from "../controllers/auth";
import { auth } from "../middlewares/auth";

const router = Router();

router.route("/currentUser").get(auth, getCurrentUser);
router.route("/logIn").post(logIn);
router.route("/signUp").post(signUp);

export default router;
