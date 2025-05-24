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
      .catch((err) => console.error(err));
  }, []);

  const startQuiz = () => {
    if (selectedId) navigate(`/quiz/${selectedId}`);
  };

  return (
    <div className="quizlist-container">
      <h2>Select a Quiz</h2>
      <select
        onChange={(e) => setSelectedId(e.target.value)}
        value={selectedId}
      >
        <option value="">-- Choose a category --</option>
        {quizzes.map((q) => (
          <option key={q._id} value={q._id}>
            {q.title}
          </option>
        ))}
      </select>
      <button onClick={startQuiz} disabled={!selectedId}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizList;
