import { Router } from "express";
import Document from "../models/Document";

const router = Router();

router.post("/", async (req, res) => {
  await Document.create(req.body);
  res.json({ message: "Document ingested" });
});

export default router;
