import mongoose from "../db/connection.js";

const ingredientModel = new mongoose.Schema({
  type: {
    type: String,
    lowercase: true,
    required: true,
  },
  ingredients: {
    type: [String],
    lowercase: true,
  },
});

export default mongoose.model("ingredients", ingredientModel);
