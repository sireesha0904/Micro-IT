import mongoose from "mongoose";

const userResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  attemptedAt: { type: Date, default: Date.now },
});

const UserResult = mongoose.model("UserResult", userResultSchema);

export default UserResult;
