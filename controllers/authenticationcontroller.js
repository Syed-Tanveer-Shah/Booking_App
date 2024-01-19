import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import createError from "http-errors"; // Assuming you have a library like 'http-errors' for creating HTTP errors
import  jwt  from "jsonwebtoken";
class AuthenticationController {
    static createDoc = async (req, res) => {
        try {
            console.log("Creating a new user...!");
            
            // Validate that the password is provided and non-null
            if (!req.body.password) {
                return res.status(400).json({ error: "Password is required." });
            }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
           
            const newUser = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hash, // Ensure this value is non-null and unique
            });

            const result = await newUser.save();
            res.send(result);
            console.log(result);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    static login = async (req, res, next) => { // Include 'next' parameter
        try {
            console.log("Creating a Login...");
            
            // Validate that the password is provided and non-null
            const user = await UserModel.findOne({ username: req.body.username })
            if (!user) return next(createError(404, "User Not Found!"));

            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordCorrect) return next(createError(400, "Password or Username is not correct!"));

            const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},"process.env.JWT");

            const {password,isAdmin, ...othersDetails}= user ._doc;
            res
            .cookie("access_token", token,{
                HttpOnly: true,
            })
            .json({...othersDetails});
            console.log(user);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

export default AuthenticationController;
