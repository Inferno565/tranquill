import { trusted } from "mongoose";
import user from "../models/user.js"
import AppError from '../utils/errorHandler.js'
import jwt, { decode } from "jsonwebtoken";

export const fetchUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // if (!decoded) {
        //     throw new AppError("Invalid or expired token", 403);
        // }
        const id = decoded._id
        const result = await user.findById(id)
        if (!result) {
            throw new AppError("Account with this username does not exist", 404)
        } else {
            res.status(200).json({ user: result, message: "User found" })
        }
    } catch (error) {
        throw new AppError(error)
    }

}

export const updateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const id = decoded._id
    const data = req.body;
    const result = await user.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    if (!result) {
        throw new AppError()
    } else {
        res.status(200).json({ message: "User Information Updated" })
    }

}