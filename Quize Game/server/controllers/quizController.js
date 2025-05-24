// controllers/quizController.js
import Quiz from "../models/Quiz.js";

export const createQuiz = async (req, res) => {
  try {
    const { title, description, totalQuestions, category } = req.body;

    if (!title || totalQuestions == null) {
      return res
        .status(400)
        .json({ message: "Title and totalQuestions required" });
    }

    const quiz = new Quiz({ title, description, totalQuestions, category });
    await quiz.save();

    res.status(201).json(quiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create quiz", error: error.message });
  }
};

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch quizzes", error: error.message });
  }
};
