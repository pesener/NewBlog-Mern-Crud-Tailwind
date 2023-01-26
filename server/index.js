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
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use("/home", userRouter);
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

mongoose.set("strictQuery", false);
app.listen(5000, () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true })
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
