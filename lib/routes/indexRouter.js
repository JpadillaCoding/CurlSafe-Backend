import express from 'express';

const router = express.Router();

router.use('/', (req, res) => {
    res.send('welcome')
})

export default router