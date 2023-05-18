import ingredientsModel from "../models/ingredientsModel.js";
import ingredientData from "./Ingredients.json" assert {type:"json"}

async function seed() {
  try {
    await ingredientsModel.insertMany(ingredientData);
    console.log("Done!")
    process.exit()
  }
  catch(error) {
    console.log(error)
    process.exit()
  }
}

seed();
