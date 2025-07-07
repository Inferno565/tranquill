import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/")
        console.log(`Connection established with ${connection}`);

    } catch (error) {
        console.log(error);
    }
}