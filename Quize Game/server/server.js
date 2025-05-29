// server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Route files
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/users", userRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/questions", questionRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Quiz Game Backend API is running...");
});


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
