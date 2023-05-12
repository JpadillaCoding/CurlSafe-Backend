import { ImageAnnotatorClient } from "@google-cloud/vision";
import multer from "multer";

const client = new ImageAnnotatorClient();
const upload = multer()
const visionController = {
  textDetection: async (req, res) => {
    console.log("yoo")
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(400).send('Error parsing form data');
      }
      const imageBuffer = req.file.buffer;
      const [result] = await client.textDetection(imageBuffer);
      const detections = result.textAnnotations;
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



