import express from "express"  //npm run server
import cors from "cors"
import {connectDB} from "./config/db.js" //***********"db.js" and not "db"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config" //this includes env file (setup the environment)

//app config -> initialise our app
const app = express()
const port = 4000 //port number

//middlewares 
// Using this middleware whatever req we get from frontend to backenf=d will be parsed using it
app.use(express.json())
//using it we can access backend from any frontend
app.use(cors())


//db connection
connectDB();

//API END-POINT
app.use("/api/food", foodRouter)
app.use("/images" , express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("Hello baby");
})

//To run express server
app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
})

//mongodb+srv://MayureshRane23:1234567890@cluster0.ann2n.mongodb.net/?