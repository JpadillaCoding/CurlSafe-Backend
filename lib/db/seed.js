import userModel from "../models/userModel.js";
import ingredientsModel from "../models/ingredientsModel.js";

async function seed() {
  await userModel.create({
    username: "tester1",
    password: "tester1",
    email: "email1",
  });
  await ingredientsModel.create({
    name: "Flour",
    shortHand: "f",
    description: "used in baking",
  });

  process.exit();
}

seed();
