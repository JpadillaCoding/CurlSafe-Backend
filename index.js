import express from "express";
import router from "./lib/routes/indexRouter.js";

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(4000, () => {
  console.log("Clean up on isle 4000");
});
