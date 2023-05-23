import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dbuser:Dbuser12345.@curlsafedb.b33pppb.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => console.log("Connected to database"));
mongoose.connection.on("disconnected", () =>console.log("Disconnected from database"));
mongoose.connection.on("error", (error) =>console.error("Database error", error));

export default mongoose;
