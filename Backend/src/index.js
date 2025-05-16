import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

const app = express();
const port = 3001;

mongoose
  .connect(uri)
  .then(() => {
    console.log(`mongo connected!`);
  })
  .catch((err) => {
    console.log(`mongo not connected! ${err}`);
  });

app.listen(port, () => {
  console.log(`connected on port: ${port}`);
});
