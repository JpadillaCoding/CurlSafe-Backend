import express from "express"
import ingredientController from "../controllers/ingredientController.js";

const ingredientRouter = express.Router()

ingredientRouter.get("/", ingredientController.index)

ingredientRouter.get("/findOne", ingredientController.findIngredient)

ingredientRouter.post("/createIngredient", ingredientController.createIngredient)

ingredientRouter.delete("/deleteIngredient/:id", ingredientController.deleteIngredient)

export default ingredientRouter

