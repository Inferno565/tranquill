import user from '../models/user.js'
import AppError from '../utils/errorHandler.js'
import jwt from 'jsonwebtoken'

// import catchAsync from "../utils/asyncErrorHandler.js"

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EX })
}

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
            const token = createToken(result._id)
            res.status(200).json({ user_id: result._id, auth: token, message: "Login Succesfull" })

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
    const token = createToken(result._id)
    res.status(200).json({ user_id: result._id, auth: token, message: "Registration Succesfull" })

}
