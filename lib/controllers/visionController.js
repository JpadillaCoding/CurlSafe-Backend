import { ImageAnnotatorClient } from "@google-cloud/vision";

const client = new ImageAnnotatorClient();

const visionController = {
  textDetection: async (req, res) => {
    const { image } = req.body;
    const [result] = await client.textDetection(image);
    const detections = result.textAnnotations;
    console.log("Text:");
    detections.forEach((text) => console.log(text));
    //console.log(detections[0]) for recieving only the text print
/*  Used this text for testing on postman
    const image = req.file.buffer
    const [result] = await client.textDetection(image);
    const detections = result.textAnnotations.map(label => label.description);
    res.json({detections}) */
  },
};

export default visionController;



