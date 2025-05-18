import { projectModel } from "../Models/project.js";

export const getProjects = async () => {
  return await projectModel.find();
};
