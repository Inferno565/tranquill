
const errorMiddleware = (err, req, res, next) => {
    console.log(err)
    if (err.name == "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);
        return res.status(400).json({
            success: false,
            errors: messages
        });
    }
    const { message = "Internal Server Error", statusCode = 500 } = err
    res.status(statusCode).json({ success: false, message, })

}
export default errorMiddleware
