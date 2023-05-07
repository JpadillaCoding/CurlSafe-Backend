import express from 'express';
import visionController from '../controllers/visionController.js';
//import multer from 'multer'; For postman testing
const visionRouter = express.Router()

visionRouter.post('/analyzeImage', visionController.textDetection)
//Replace above code for postman testing
//visionRouter.post('/analyzeImage', upload.single('image') ,visionController.textDetection)

export default visionRouter