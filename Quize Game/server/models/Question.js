import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }], // e.g. ["A", "B", "C", "D"]
  correctAnswer: { type: String, required: true }, // could be option string or index
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
