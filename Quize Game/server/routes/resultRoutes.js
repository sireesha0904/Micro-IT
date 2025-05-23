import express from "express";
import {
  saveResult,
  getResultsByUser,
  getResultsByQuiz,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/", saveResult);
router.get("/user/:userId", getResultsByUser);
router.get("/quiz/:quizId", getResultsByQuiz);

export default router;
