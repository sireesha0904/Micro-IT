import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./StartQuiz.css"; // Add styles here

function StartQuiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/questions/quiz/${quizId}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch questions:", err);
        setLoading(false);
      });
  }, [quizId]);

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

    if (timeLeft === 0) {
      setShowResult(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (loading) return <p>Loading...</p>;
  if (questions.length === 0) return <p>No questions found for this quiz.</p>;

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
    setTimeLeft(60);
  };

  if (showResult) {
    return (
      <div className="quiz-result-container">
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
        <button className="btn" onClick={handleRestart}>
          Restart Quiz
        </button>
        <button className="btn" onClick={() => navigate("/quizzes")}>
          Back to Quizzes
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Time Left: {timeLeft}s</h2>
        <p>
          <strong>Q{currentIndex + 1}:</strong> {currentQuestion.questionText}
        </p>
      </div>

      <div className="options-list">
        {currentQuestion.options.map((opt, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedOption === index ? "selected" : ""
            }`}
            onClick={() => handleOptionSelect(index)}
          >
            {opt.text}
          </button>
        ))}
      </div>

      <button
        className="btn next-btn"
        onClick={handleNext}
        disabled={selectedOption === null}
      >
        {currentIndex + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default StartQuiz;
