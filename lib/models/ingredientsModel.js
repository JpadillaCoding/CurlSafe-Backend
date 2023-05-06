import mongoose from "mongoose";

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

export default mongoose.model(ingredientModel, "ingredientModel");
