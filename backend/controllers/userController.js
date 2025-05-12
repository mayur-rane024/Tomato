import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User Doesn't exists" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking if user exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" })
        }

        //validating email format and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please Enter Valid Email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ message: " Password must be atleast 8 characters" })
        }
        //hashing password
        //10->cost factor (higher cost = more secure but slower).
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save(); //save the user to the database
        //creating token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { loginUser, registerUser }