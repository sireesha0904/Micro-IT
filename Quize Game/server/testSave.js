import mongoose from "mongoose";
import dotenv from "dotenv";
import UserResult from "./models/UserResult.js";

dotenv.config();

async function test() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");

  const testResult = new UserResult({
    user: "60d2f9f6e1a2b4567890abcd",
    quiz: "60d2fa10e1a2b4567890abce",
    score: 8,
    totalQuestions: 10,
    correctAnswers: 8,
  });

  const saved = await testResult.save();
  console.log("Saved:", saved);

  mongoose.disconnect();
}

test().catch((err) => console.error(err));
