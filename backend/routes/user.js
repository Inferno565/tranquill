import { Router } from "express";
import { fetchUser, updateUser } from "../controllers/userController.js";
const router = Router()

router.post("/update", fetchUser)
router.put("/update", updateUser)

export default router