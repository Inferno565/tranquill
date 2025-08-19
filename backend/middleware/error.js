import ErrorHandler from "../utils/errorHandler.js";

const errorMiddleware = (err, req, res, next) => {
    const { message = "Internal Server Error", statusCode = 500 } = err
    res.status(statusCode).json({ success: false, message, })
    console.log(err)
}
export default errorMiddleware
