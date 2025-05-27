import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./QuizList.css";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error("Failed to fetch quizzes:", err));
  }, []);

  const startQuiz = () => {
    if (selectedId) {
      navigate(`/quiz/${selectedId}`);
    }
  };

  return (
    <div className="quizlist-container">
      <div className="quiz-card">
        <h2>
          <i className="fa-solid fa-list-check"></i> Choose Your Quiz
        </h2>

        <div className="select-wrapper">
          <i className="fa-solid fa-bars icon-left"></i>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">-- Choose a category --</option>
            {quizzes.map((quiz) => (
              <option key={quiz._id} value={quiz._id}>
                {quiz.title}
              </option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down icon-right"></i>
        </div>

        <button
          onClick={startQuiz}
          disabled={!selectedId}
          className="start-btn"
        >
          <i className="fa-solid fa-circle-play"></i> Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizList;
