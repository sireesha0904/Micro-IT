import UserResult from "../models/UserResult.js";

// Save user result
export const saveResult = async (req, res) => {
  const { user, quiz, score, totalQuestions, correctAnswers } = req.body;

  console.log("saveResult called with body:", req.body);

  if (
    !user ||
    !quiz ||
    score == null ||
    totalQuestions == null ||
    correctAnswers == null
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newResult = new UserResult({
      user,
      quiz,
      score,
      totalQuestions,
      correctAnswers,
      attemptedAt: new Date(),
    });

    const savedResult = await newResult.save();
    console.log("Result saved:", savedResult);
    res.status(201).json(savedResult);
  } catch (error) {
    console.error("Error saving result:", error);
    res.status(500).json({ message: "Server error while saving result" });
  }
};

// Get results by user ID
export const getResultsByUser = async (req, res) => {
  try {
    const results = await UserResult.find({ user: req.params.userId }).populate(
      "quiz",
      "title"
    );
    res.json(results);
  } catch (error) {
    console.error("Error fetching results by user:", error);
    res.status(500).json({ message: "Server error while fetching results" });
  }
};

// Get results by quiz ID
export const getResultsByQuiz = async (req, res) => {
  try {
    const results = await UserResult.find({ quiz: req.params.quizId }).populate(
      "user",
      "name email"
    );
    res.json(results);
  } catch (error) {
    console.error("Error fetching results by quiz:", error);
    res.status(500).json({ message: "Server error while fetching results" });
  }
};
