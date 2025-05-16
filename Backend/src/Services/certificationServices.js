import { certificationModel } from "../Models/cerifications.js";

export const getCertifications = async () => {
  return await certificationModel.find();
};
