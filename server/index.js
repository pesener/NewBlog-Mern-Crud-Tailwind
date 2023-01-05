import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/home", userRouter);
mongoose.set("strictQuery", false);
app.listen(5000, () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
