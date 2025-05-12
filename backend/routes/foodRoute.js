import express from "express"
import { addFood , listFood , removeFood} from "../controllers/foodController.js"
import multer from "multer" //to create image storage sysytem

const foodRouter = express.Router();

//Image storage Engine

const storage =multer.diskStorage({
    destination :"uploads",
    filename:(req, file , cb)=>{
         return cb(null,`${Date.now()}${file.originalname }`)
    }
})

//Middleware
const upload = multer ({storage:storage})

//we will send the data on server and accordingly the server will process and we will egt the response 
//we will upload the above middleware on this route
foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove" , removeFood);

export default foodRouter;