import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
export default connectDB;