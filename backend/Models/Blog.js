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

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog