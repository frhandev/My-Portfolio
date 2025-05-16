import express from "express";
import { getCertifications } from "../Services/certificationServices.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const certifications = await getCertifications();
    res.status(200).send(certifications);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
