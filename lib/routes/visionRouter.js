import express from 'express';
import visionController from '../controllers/visionController.js';

const visionRouter = express.Router()

visionRouter.post('/analyzeImage', visionController.textDetection)

export default visionRouter