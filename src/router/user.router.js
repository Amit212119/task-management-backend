import { Router } from "express";
import { loginUser, logoutUser, registerUser, userProfile } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser)

router.route("/logout").post( verifyJWT, logoutUser);
router.route("/profile").get(verifyJWT, userProfile);

export default router;