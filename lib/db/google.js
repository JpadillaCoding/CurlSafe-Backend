import { ImageAnnotatorClient } from '@google-cloud/vision';

// Creates a client
const client = new ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file
const [result] = await client.textDetection('./prep/sample-bottle.jpg');
const detections = result.textAnnotations;
console.log('Text:');
/* detections.forEach(text => console.log(text)); */
console.log(detections[0])