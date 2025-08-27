import { Router } from "express";
import { updateUser } from "../controllers/userController.js";
const router = Router()

router.post("/update", updateUser)

export default router