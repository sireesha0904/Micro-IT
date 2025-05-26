import express from "express";
import Question from "../models/Question.js"; // Adjust the path as necessary
import mongoose from "mongoose";
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

    // Validate that each option has text and isCorrect
    for (const opt of options) {
      if (typeof opt.text !== "string" || typeof opt.isCorrect !== "boolean") {
        return res
          .status(400)
          .json({
            message:
              "Each option must have text (string) and isCorrect (boolean)",
          });
      }
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
  const { quizId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(quizId)) {
    return res.status(400).json({ message: "Invalid quiz ID" });
  }

  try {
    const questions = await Question.find({ quiz: quizId });
    res.json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch questions", error: error.message });
  }
});

// Update a question by ID
router.put("/:id", async (req, res) => {
  try {
    const { questionText, options, explanation } = req.body;

    // Optionally validate options here as well

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { questionText, options, explanation },
      { new: true, runValidators: true }
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
