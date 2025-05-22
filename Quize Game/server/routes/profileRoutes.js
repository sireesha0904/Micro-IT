import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.send(`Welcome user with ID: ${req.user.id}`);
});

export default router;
