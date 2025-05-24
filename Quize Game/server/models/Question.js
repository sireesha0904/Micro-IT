import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    questionText: { type: String, required: true },
    options: {
      type: [optionSchema],
      required: true,
      validate: [(arr) => arr.length >= 2, "At least 2 options required"],
    },
    explanation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
