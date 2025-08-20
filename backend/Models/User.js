import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email Id"],
        unique: [true, "An account is alreay associated with this email"],
        validate: [(val) => {
            const regex = /^[\w.-]+@([\w-]+\.)+[A-Za-z]{2,4}$/
            return regex.test(val)
        }, "Please Enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        // minLength: [6, "Password must be greater than 6 characters."],
        validate: [(val) => {
            const passRegex = /^(?=.*[A-Z]).{6,}$/
            return passRegex.test(val)
        }, "Password must have min 6 chars with atleast 1 uppercase letter"]
    },
    username: {
        type: String,
        minLength: [5, "Username must be more than 5 Chracters"],
        unique: [true, "This name is already taken"]
    },
    firstname: {
        type: String,
        required: [true, "Please enter your first name."],
    },
    lastname: {
        type: String,
        required: [true, "Please enter your last name."],
    },
    bio: {
        type: String,
    }
})

userSchema.pre("save", async function () {
    // const saltRounds = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


const user = mongoose.model('user', userSchema)

export default user