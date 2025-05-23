import Quiz from "../models/Quiz.js";

// Create new quiz
export const createQuiz = async (req, res) => {
  const { title, description, totalQuestions } = req.body;
  try {
    if (!title || totalQuestions == null) {
      return res
        .status(400)
        .json({ message: "Title and totalQuestions are required." });
    }

    const quiz = new Quiz({ title, description, totalQuestions });
    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create quiz", error: error.message });
  }
};

// Get all quizzes
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
