import { Router } from "express";
import home from "./home.route.js";

const router = Router();

router.get("/", home);

export default router;
