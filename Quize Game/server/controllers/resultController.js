import UserResult from "../models/UserResult.js";

// Save user result
export const saveResult = async (req, res) => {
  const { user, quiz, score, totalQuestions, correctAnswers } = req.body;

  try {
    if (
      !user ||
      !quiz ||
      score == null ||
      totalQuestions == null ||
      correctAnswers == null
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newResult = new UserResult({
      user,
      quiz,
      score,
      totalQuestions,
      correctAnswers,
      attemptedAt: new Date(),
    });

    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get results by user
export const getResultsByUser = async (req, res) => {
  try {
    const results = await UserResult.find({ user: req.params.userId }).populate(
      "quiz",
      "title"
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get results by quiz
export const getResultsByQuiz = async (req, res) => {
  try {
    const results = await UserResult.find({ quiz: req.params.quizId }).populate(
      "user",
      "name email"
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
