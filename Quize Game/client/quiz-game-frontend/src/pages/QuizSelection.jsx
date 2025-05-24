import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./QuizSelection.css";

const QuizSelection = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get("/api/quizzes");
        setQuizzes(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load quizzes");
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const handleStartQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  if (loading) return <div className="loading">Loading quizzes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="quiz-selection-container">
      <h2>Select a Quiz Category</h2>
      <div className="quiz-grid">
        {quizzes.map(
          ({ _id, title, description, totalQuestions, category }) => (
            <div
              key={_id}
              className="quiz-card"
              onClick={() => handleStartQuiz(_id)}
            >
              <h3>{title}</h3>
              <p>{description || "No description provided"}</p>
              <small>Category: {category || "General"}</small>
              <small>Total Questions: {totalQuestions}</small>
              <button className="start-btn">Start Quiz</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuizSelection;
