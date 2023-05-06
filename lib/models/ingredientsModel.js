import mongoose from "../db/connection.js";

const ingredientModel = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  shortHand: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("ingredients",ingredientModel);
