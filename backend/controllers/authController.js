import user from '../models/user.js'
import AppError from '../utils/errorHandler.js'
// import catchAsync from "../utils/asyncErrorHandler.js"


export const login = async (req, res, next) => {
    // const { username, password } = req.body
    const username = "John Doe"
    const password = "1234"
    if (username && password) {
        const result = await user.findOne({ username, password })
        if (!result) {
            throw new AppError("User Not Found", 400)
        }
        res.status(200).json({ message: "Login Succesfull" })
    } else { console.log("Please enter username and password"); }

}

export const register = async (req, res, next) => {
    const username = "John Doe"
    const password = "1234"
    if (username && password) {
        const result = await user.create({ username, password })
        if (!result) {
            return new AppError()
        }
        res.status(200).json({ message: "Registration Succesfull" })
    } else { console.log("Please enter username and password"); }
}