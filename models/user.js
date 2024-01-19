import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Example minimum password length
        // You might want to add more password validation or hashing for security
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);

export default UserModel
