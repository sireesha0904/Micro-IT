import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

// Create a new quiz
router.post("/", async (req, res) => {
  try {
    const { title, description, category, createdBy } = req.body;
    const quiz = new Quiz({
      title,
      description,
      category,
      createdBy,
      questions: [],
    });
    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create quiz", error: error.message });
  }
});

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("createdBy", "username email");
    res.json(quizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch quizzes", error: error.message });
  }
});

// Get quiz by ID (including questions)
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate("questions");
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch quiz", error: error.message });
  }
});

// Update a quiz by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true }
    );
    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(updatedQuiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update quiz", error: error.message });
  }
});

// Delete a quiz by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete quiz", error: error.message });
  }
});

export default router;
