import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true,
    },
    content: {
        type: String,
        required: true,

    },
    author: {
        type: String,
    },
})

const blog = mongoose.model('blog', blogSchema)

export default blog