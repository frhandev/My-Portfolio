import { skillModel } from "../Models/skills.js";

export const getSkills = async () => {
  return await skillModel.find();
};
