import express from "express";
import { getSkills } from "../Services/skillsServices.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const skills = await getSkills();
    res.status(200).send(skills);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
