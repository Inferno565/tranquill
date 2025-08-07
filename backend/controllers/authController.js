import user from '../models/user.js'
import ErrorHandler from '../utils/errorHandler.js'
import catchAsync from "../utils/asyncErrorHandler.js"


const login = catchAsync(async (req, res, next) => {
    // const { username, password } = req.body
    const username = "John Doe"
    const password = "1234"
    if (username && password) {
        const result = await user.findOne({ username, password })
        if (!result) {
            return next(new ErrorHandler("User Not found", 400))
        }
        res.status(200).json({ message: "Login Succesfull" })
    }
    console.log("Please enter username and password");
})

export default login