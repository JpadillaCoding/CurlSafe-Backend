import express from "express";
import userController from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/", userController.index);
//make admin specific
userRouter.get("/:id", userController.indexById);

userRouter.post("/createUser", userController.createUser);

export default userRouter;
