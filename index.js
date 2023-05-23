import express from "express";
import router from "./lib/routes/indexRouter.js";
import * as dotenv from 'dotenv';
/* import cors from 'cors' */

const app = express();
dotenv.config()
app.use(express.json());

/* const corsOptions ={
  origin:'10.0.2.2', //change to deployed url
  credentials:true,
  optionSuccessStatus:200,
}
app.use(cors(corsOptions)); */

app.use('/', router);

app.listen(process.env.PORT || 4000, () => {
  console.log("Clean up on isle 4000");
});
