import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
})

const user = mongoose.model('user', userSchema)

export default user