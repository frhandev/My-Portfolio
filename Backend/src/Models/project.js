import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: String,
  thumbnail: String,
  desc: String,
  URL: String,
});

export const projectModel = mongoose.model("projects", projectSchema);
