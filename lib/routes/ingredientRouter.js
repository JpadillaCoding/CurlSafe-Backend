import express from "express"
import ingredientController from "../controllers/ingredientController";

const ingredientRouter = express.Router()

ingredientRouter.get("/", ingredientController.index)

ingredientRouter.get("/findOne", ingredientController.findIngredient)

ingredientRouter.get("/createIngredient", ingredientController.createIngredient)

ingredientRouter.get("/deleteIngredient", ingredientController.deleteIngredient)

export default ingredientRouter

