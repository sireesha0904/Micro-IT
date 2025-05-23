import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  description: { type: String },
  totalQuestions: {
    type: Number,
    required: [true, "Total number of questions is required"],
  },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
