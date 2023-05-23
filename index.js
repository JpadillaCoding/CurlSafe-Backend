import express from "express";
import router from "./lib/routes/indexRouter.js";
import * as dotenv from 'dotenv';

const app = express();
dotenv.config()
app.use(express.json());


app.use('/', router);

app.listen(process.env.PORT || 4000, () => {
  console.log("Clean up on isle 4000");
});
