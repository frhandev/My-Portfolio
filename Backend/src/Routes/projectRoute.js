import express from "express";
import { getProjects } from "../Services/projectServices.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).send(projects);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
