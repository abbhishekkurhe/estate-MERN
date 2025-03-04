import express from "express";
import { google, signin, signOut, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin); // Consistent lowercase
router.post("/google", google);
router.get("/signout", signOut); // Keep as POST if using tokens

export default router;
