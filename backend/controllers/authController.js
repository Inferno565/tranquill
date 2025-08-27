import user from '../models/user.js'
import AppError from '../utils/errorHandler.js'
// import catchAsync from "../utils/asyncErrorHandler.js"

export const login = async (req, res, next) => {
    const { username, password } = req.body

    if (username && password) {
        let result = await user.findOne({
            $or: [{ username: username }, { email: username }]
        })
        if (!result) {
            throw new AppError("Account with this username does not exist", 404)
            // res.status(404).json({ message: "Account with this username does not exist" })
        }
        let checkAuth = await result.comparePassword(password)
        if (!checkAuth) {
            throw new AppError("Invalid login credentials", 401)
            // res.status(401).json({ message: "Invalid login credentials" })
        } else {
            res.status(200).json({ user_id: result._id, message: "Login Succesfull" })

        }

    } else { console.log("Please enter username and password"); }

}

export const register = async (req, res, next) => {
    const { email, password, username, firstname, lastname, bio } = req.body
    let _user = { email, password, username, firstname, lastname, bio }
    const checkUser = await user.findOne(_user)
    if (checkUser) {
        throw new AppError("An account associated with this email already exists", 409)
    }
    let result = await user.create(_user)
    if (!result) {
        return new AppError()
    }
    res.status(200).json({ message: "Registration Succesfull" })

}
