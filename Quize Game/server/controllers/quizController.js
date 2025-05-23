// controllers/quizController.js
import Quiz from "../models/Quiz.js";

export const createQuiz = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // ✅ Add this for debugging

    const { title, description, totalQuestions, category } = req.body;

    if (!title || totalQuestions == null) {
      return res
        .status(400)
        .json({ message: "Title and totalQuestions are required." });
    }

    const quiz = new Quiz({
      title,
      description,
      totalQuestions,
      category,
    });

    const savedQuiz = await quiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    console.error("CREATE QUIZ ERROR:", err); // ✅ Add this for debugging
    res
      .status(500)
      .json({ message: "Failed to create quiz", error: err.message });
  }
};
