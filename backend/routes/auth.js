import Router  from "express";
import login from '../controllers/authController.js'
const router = Router()

router.get('/login', login)
// router.get('/register', authController.register)
// router.post('/logout', authController.signOut)

export default router