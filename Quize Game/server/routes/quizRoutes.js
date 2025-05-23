// routes/quizRoutes.js
import express from "express";
import { createQuiz, getAllQuizzes } from "../controllers/quizController.js";

const router = express.Router();

router.post("/", createQuiz); // POST /api/quizzes
router.get("/", getAllQuizzes); // GET  /api/quizzes

export default router;
