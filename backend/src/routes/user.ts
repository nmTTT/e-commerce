import { Router } from "express";
import { getLoggedUser } from "../controllers/user";
import { auth } from "../middlewares/auth";

const router = Router();

router.route("/user").get(auth, getLoggedUser);

export default router;
