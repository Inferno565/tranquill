import express from "express";
import dotenv from 'dotenv'
import connectDB from "./Config/Database.js";
import user from "./Models/User.js";
import blog from "./Models/Blog.js";
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDB()


app.get("/", (req, res) => {

    res.send("Working")

})

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port} `);
})