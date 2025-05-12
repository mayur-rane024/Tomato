// LOGIC TO CONNECT WITH THE DATABASE
import mongoose from "mongoose"


//create this function and export in the server.js -> there we will connect our backedn database just by "importing" and  using "connectDB()" 
export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://MayureshRane23:1234567890@cluster0.ann2n.mongodb.net/Tomato-FOOD-DElivery").then(()=>{console.log("DB CONNECTED")});
}
//remove "?" and add project name instead.
