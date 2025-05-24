import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./QuizComponent.css";

const QuizComponent = () => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`/api/questions/quiz/${quizId}`);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, [quizId]);

  if (questions.length === 0)
    return <div className="loading">Loading questions...</div>;

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (currentQuestion.options[selectedOption].isCorrect) {
      setScore((prev) => prev + 1);
    }

    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="quiz-result-container">
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
        <button onClick={handleRestart} className="start-btn">
          Restart Quiz
        </button>
        <button
          onClick={() => navigate("/quizzes")}
          className="start-btn back-btn"
        >
          Back to Quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>{currentQuestion.questionText}</h3>
      <div className="options-list">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`option-btn ${
              selectedOption === index ? "selected" : ""
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="start-btn"
        disabled={selectedOption === null}
      >
        {currentIndex + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default QuizComponent;
