import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config()
console.log(process.env.DBUSER, process.env.DBPASS)
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@curlsafedb.b33pppb.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => console.log("Connected to database"));
mongoose.connection.on("disconnected", () =>console.log("Disconnected from database"));
mongoose.connection.on("error", (error) =>console.error("Database error", error));

export default mongoose;
