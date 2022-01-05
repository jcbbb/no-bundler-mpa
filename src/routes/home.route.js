import { Router } from "express";
import * as HomeController from "../controllers/home.controller.js";

const router = Router();

router.get("/", HomeController.getIndex);

export default router;
