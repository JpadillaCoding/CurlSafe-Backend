import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    }
})

export default mongoose.model(userModel, 'userModel')