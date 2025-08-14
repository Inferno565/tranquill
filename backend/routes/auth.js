import Router from "express";
import { login, register } from '../controllers/authController.js'
const router = Router()

router.get('/login', login)
router.get('/register', register)
// router.post('/logout', authController.signOut)

export default router