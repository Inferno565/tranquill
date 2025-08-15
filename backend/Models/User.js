import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email Id"],
        unique: [true, "An account is alreay associted with this email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Password must be greater than 6 characters."],
    },
    userName: {
        type: String,
        required: [true, "Please enter a username"],
        minLength: [5, "Username must be more than 5 Chracters"],
        unique: true
    },
    firstName: {
        type: String,
        required: [true, "Please enter your first name."],

    },
    lastName: {
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