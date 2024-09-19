import { Router } from "express";
import { logIn } from "../controllers/auth";

const router = Router();

router.route("/logIn").post(logIn);

export default router;
