import mongoose, { Schema } from "mongoose";

const certificationSchema = new Schema({
  name: String,
  company: String,
  date: String,
});

export const certificationModel = mongoose.model(
  "Certifications",
  certificationSchema
);
