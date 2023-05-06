import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/curlSafe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))


export default mongoose