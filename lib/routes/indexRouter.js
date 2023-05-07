import express from 'express';
import userRouter from './userRoutes.js';
import ingredientRouter from './ingredientRouter.js';

const router = express.Router();

router.use("/users", userRouter)

router.use("/ingredients", ingredientRouter)

router.use('/', (req, res) => {
    res.send('welcome')
})

export default router