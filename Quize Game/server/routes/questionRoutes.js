import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// Create a question for a quiz
router.post("/", async (req, res) => {
  try {
    const { quiz, questionText, options, explanation } = req.body;

    if (!quiz || !questionText || !options || options.length < 2) {
      return res
        .status(400)
        .json({ message: "Missing required fields or not enough options" });
    }

    const question = new Question({ quiz, questionText, options, explanation });
    const savedQuestion = await question.save();

    res.status(201).json(savedQuestion);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create question", error: error.message });
  }
});

// Get all questions for a quiz
router.get("/quiz/:quizId", async (req, res) => {
  try {
    const questions = await Question.find({ quiz: req.params.quizId });
    res.json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch questions", error: error.message });
  }
});

// Get a question by ID
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(question);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch question", error: error.message });
  }
});

// Update a question by ID
router.put("/:id", async (req, res) => {
  try {
    const { questionText, options, explanation } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { questionText, options, explanation },
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(updatedQuestion);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update question", error: error.message });
  }
});

// Delete a question by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete question", error: error.message });
  }
});

export default router;
