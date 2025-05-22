import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/quizzes", quizRoutes);
// Root route for test
app.get("/", (req, res) => {
  res.send("Quiz Game Backend API is running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
