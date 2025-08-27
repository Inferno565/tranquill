import express from "express";
import { Router } from "express";
import dotenv from 'dotenv'
import connectDB from "./config/database.js";
import errorMiddleware from './middleware/error.js'
import cors from "cors"
// import ErrorHandler from './utils/errorHandler.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
// import session from "express-session";


dotenv.config({ quiet: true })
const router = Router()
const app = express()
const port = process.env.PORT || 5000
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.get("/", (req, res, next) => {
    res.send("Working")
})


app.use("/", authRoutes)
app.use("/", userRoutes)
app.use(errorMiddleware)


app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port} `);
})