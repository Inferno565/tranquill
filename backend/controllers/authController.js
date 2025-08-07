import e from "express";
import connectDB from "../config/database.js";
import user from '../models/user.js'
connectDB()

export default login = asyncErrorHandler(async (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        const result = user.findOne({ username, password })
        if (!result) {
            return res.status(401).json({ error: "Invalid username or password" })
        }
        res.status(200).json({ message: "Login Succesfull" })
    }
})