import { ImageAnnotatorClient } from "@google-cloud/vision";
import multer from "multer";

const client = new ImageAnnotatorClient();
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
      res.json(detections);
    });
    //console.log(detections[0]) for recieving only the text print
/*  Used this text for testing on postman
    const image = req.file.buffer
    const [result] = await client.textDetection(image);
    const detections = result.textAnnotations.map(label => label.description);
    res.json({detections}) */
  },
};

export default visionController;



