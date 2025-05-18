import mongoose, { Schema } from "mongoose";

const meSchema = new Schema({
  title: String,
  img: String,
});

export const projectModel = mongoose.model("me", meSchema);

export const getME = async () => {
  return await projectModel.find();
};
