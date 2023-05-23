import { ImageAnnotatorClient } from "@google-cloud/vision";
import multer from "multer";
import fs from 'fs'
import dotenv from 'dotenv';

dotenv.config()
const credentialsFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS
const credentialsData = fs.readFileSync(credentialsFilePath);
const CREDENTIALS = JSON.parse(credentialsData);

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email
  }
}
const client = new ImageAnnotatorClient(CONFIG);
const upload = multer()
const visionController = {
  textDetection: async (req, res) => {
    upload.single('image')(req, res, async (err) => {
      console.log('working on it....')
      if (err) {
        console.error(err);
        return res.status(400).send('Error parsing form data');
      }
      if(!req.file) {
        return res.status(400).send('no file')
      }
      if(!req.file.buffer) {
        return res.status(400).send('buffer missing')
      }
      const imageBuffer = req.file.buffer;
      const [result] = await client.textDetection(imageBuffer);
      const detections = result.textAnnotations.map((text) => text.description);
      res.json(result.textAnnotations[0].description) //index[0] returned because other index's are individual words. Need whole text
    });
  },
};

export default visionController;



