import mongoose from "mongoose";

const optionSchema = mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    questionText: { type: String, required: true },
    options: [optionSchema],
    explanation: { type: String }, // Optional explanation for answers
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
