import express from "express";
import { Router } from "express";
import dotenv from 'dotenv'
import connectDB from "./config/database.js";
import errorMiddleware from './middleware/error.js'
import ErrorHandler from './utils/errorHandler.js'
import authRoutes from './routes/auth.js'
dotenv.config()
const router = Router()
const app = express()
const port = process.env.PORT || 3000

connectDB()

router.get("/", (req, res, next) => {
    const { secret } = req.query
    if (!secret) {
        return next(new ErrorHandler("your error is working", 200));
    }
    res.send("Working")

})

app.use("/", router)
app.use("/auth", authRoutes)
app.use(errorMiddleware)

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port} `);
})