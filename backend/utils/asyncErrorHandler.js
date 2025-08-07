const catchAsync = (passedFunction) => (req, res, next) => {
    passedFunction(req, res, next).catch(e => next(e))
}
export default catchAsync

