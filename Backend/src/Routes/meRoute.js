import express from "express";
import { getME } from "../meDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ME = await getME();
    res.status(200).send(ME);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
