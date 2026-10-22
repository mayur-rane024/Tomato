// LOGIC TO CONNECT WITH THE DATABASE
import mongoose from "mongoose"


//create this function and export in the server.js -> there we will connect our backedn database just by "importing" and  using "connectDB()" 
export const connectDB = async ()=>{
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/tomato";
    await mongoose.connect(mongoUri).then(()=>{console.log("DB CONNECTED")});
}
