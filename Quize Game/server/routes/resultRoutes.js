import express from "express";
import {
  saveResult,
  getResultsByUser,
  getResultsByQuiz,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/", saveResult); // <--- This is your POST handler

router.get("/user/:userId", getResultsByUser);

router.get("/quiz/:quizId", getResultsByQuiz);

export default router;
