import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true, trim: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    questionText: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [optionSchema],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length >= 2;
        },
        message: "At least 2 options required",
      },
    },
    explanation: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
