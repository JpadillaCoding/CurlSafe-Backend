import express from 'express';
import userRouter from './userRoutes.js';

const router = express.Router();

router.use("/users", userRouter)

router.use('/', (req, res) => {
    res.send('welcome')
})

export default router