import mongoose from "mongoose";

const connectDb = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected to the database')
    } catch (error) {
        throw new Error('Failed to connect to the database')
    }
}

export default connectDb;