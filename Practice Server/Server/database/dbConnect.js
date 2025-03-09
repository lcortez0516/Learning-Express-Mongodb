import mongoose from "mongoose";

 const dbConnect = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log('Connected successfully')
    } catch (error) {
        console.log(error)
    }
}


export {dbConnect}