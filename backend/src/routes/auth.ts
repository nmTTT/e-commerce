import { Router } from "express";
import {
  logIn,
  signUp,
  getCurrentUser,
  verifyOtp,
  forgetPass,
  verifyPass,
} from "../controllers/auth";
import { auth } from "../middlewares/auth";

const router = Router();

router.route("/current-user").get(auth, getCurrentUser);
router.route("/logIn").post(logIn);
router.route("/signUp").post(signUp);
router.route("/verify-otp").post(verifyOtp);
router.route("/forget-password").post(forgetPass);
router.route("/verify-password").post(verifyPass);

export default router;
