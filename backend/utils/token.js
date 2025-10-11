const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EX })
}

export default createToken;