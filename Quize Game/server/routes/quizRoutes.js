import express from "express";
import Quiz from "../models/Quiz.js";
const router = express.Router();

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch quizzes" });
  }
});

export default router;
