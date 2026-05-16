import { Router, Request, Response } from "express";
import { askRAG } from "../services/rag.service";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const answer = await askRAG(question);
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
