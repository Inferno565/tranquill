import user from "../models/user.js"
import AppError from '../utils/errorHandler.js'

export const updateUser = async (req, res, next) => {
    const { id } = req.body
    const result = await user.findById(id)
    if (!result) {
        throw new AppError("Account with this username does not exist", 404)
    } else {
        res.status(200).json({ user: result, message: "User found" })
    }
}