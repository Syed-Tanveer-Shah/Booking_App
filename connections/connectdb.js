import mongoose from "mongoose";
const connectDB = async(DATABASE_URL) =>{
    try {
       const DB_OPTIONS={
        dbName: "Booking",
       };
       await mongoose.connect(DATABASE_URL, DB_OPTIONS);
       console.log("Connect to  the server Successfully....!");
    } catch (error) {
        console.log("Does not connected");
    }
};

export default connectDB