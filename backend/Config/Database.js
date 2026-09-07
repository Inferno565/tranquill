import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI)        
        console.log(`Connection established with ${connection.name}`);

    } catch (error) {
        console.log(error);
    }
}

export default connectDB