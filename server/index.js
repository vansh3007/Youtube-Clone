import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./Routes/User.js";
import videoRoute from "./Routes/video.js";
import commentRoute from "./Routes/Commet.js"
import path from "path";

dotenv.config();
const app = express();
const DBurl = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static(path.join("uploads")));

app.get("/", (req, res) => {
  res.send("root path");
});
app.use("/user", userRoute);
app.use("/video", videoRoute);
app.use("/comment", commentRoute);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

mongoose
  .connect(DBurl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
