import { express, Router } from "express";

const router = Router()

router.get('/login', authController.login)
router.get('/register', authController.register)
router.post('/logout', authController.signOut)
