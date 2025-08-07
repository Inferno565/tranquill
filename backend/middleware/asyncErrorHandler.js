export default asyncErrorHander = (req, res, next) => {
    try {
        // passedFunction()
    } catch (err) {
        res.json({ error: err })
    }
}