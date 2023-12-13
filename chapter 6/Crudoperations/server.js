const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./controllers/product.controller");
const userRouter = require("./controllers/user.controller");

app.use(express.json());
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB     is Running on port : " + port))
  .catch((err) => console.log(err));

app.use("/", productRouter);
app.use("/", userRouter);
app.listen(port, () => {
  console.log("server is running on port : " + port);
});
