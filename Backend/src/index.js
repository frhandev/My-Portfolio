import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import certificationRoute from "./Routes/certificationRoute.js";
import skillsRoute from "./Routes/skillsRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log(`mongo connected!`);
  })
  .catch((err) => {
    console.log(`mongo not connected! ${err}`);
  });

app.use("/certifications", certificationRoute);
app.use("/skills", skillsRoute);

app.listen(port, () => {
  console.log(`connected on port: ${port}`);
});
