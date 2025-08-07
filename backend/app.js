import express from "express";
import { Router } from "express";
import dotenv from 'dotenv'
import connectDB from "./config/database.js";
// import user from "./models/user.js";
// import blog from "./models/blog.js";
dotenv.config()
const router = Router()
const port = process.env.PORT || 3000
const app = express()

connectDB()

router.get("/", (req, res) => {

    res.send("Working")

})

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port} `);
})