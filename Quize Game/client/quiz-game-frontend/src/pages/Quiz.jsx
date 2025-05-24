import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quiz.css";

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/quizzes");
        setQuizzes(res.data);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);

  useEffect(() => {
    if (!started || questions.length === 0 || currentIndex >= questions.length)
      return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext(); // auto-next
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, currentIndex, questions]);

  const handleStart = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/questions?category=${selected}`
      );
      setQuestions(res.data);
      setStarted(true);
      setTimer(30);
      setScore(0);
      setCurrentIndex(0);
    } catch (error) {
      alert("Failed to fetch questions.");
    }
  };

  const handleAnswer = (option) => {
    if (option === questions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTimer(30);
    } else {
      setShowResult(true);
      setStarted(false);
    }
  };

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="quiz-container">
      {!started && !showResult && (
        <>
          <h1>Select Quiz Category</h1>

          <div className="quiz-controls">
            <input
              type="text"
              placeholder="Search category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="quiz-search"
            />

            <select
              className="quiz-dropdown"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="">-- Choose a category --</option>
              {filteredQuizzes.map((quiz) => (
                <option key={quiz._id} value={quiz.title}>
                  {quiz.title}
                </option>
              ))}
            </select>
          </div>

          {selected && (
            <div className="start-section">
              <p>
                🎉 Selected: <strong>{selected}</strong>
              </p>
              <button className="start-btn" onClick={handleStart}>
                Start Quiz
              </button>
            </div>
          )}
        </>
      )}

      {started && questions.length > 0 && (
        <div className="question-card">
          <div className="timer">⏱ {timer}s</div>
          <h2>{questions[currentIndex].question}</h2>
          <div className="options">
            {questions[currentIndex].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div className="result-card">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button
            onClick={() => {
              setSelected("");
              setSearchTerm("");
              setShowResult(false);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
