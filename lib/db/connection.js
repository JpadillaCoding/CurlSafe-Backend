import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/curlSafe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default mongoose