import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  title: String,
  logo: String,
});

export const skillModel = mongoose.model("skills", skillSchema);
