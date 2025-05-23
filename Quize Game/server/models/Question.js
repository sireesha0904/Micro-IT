import mongoose from "mongoose";

const optionSchema = mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }, // required field
});

const questionSchema = mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    questionText: { type: String, required: true },
    options: {
      type: [optionSchema],
      required: true,
      validate: {
        validator: (v) => Array.isArray(v) && v.length >= 2,
        message: "At least two options are required",
      },
    },
    explanation: { type: String }, // Optional explanation
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
