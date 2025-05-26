import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./QuizList.css"; // optional styling

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const navigate = useNavigate();

  // Fetch quiz list on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quizzes") // Make sure this returns [{ _id, title }]
      .then((res) => {
        setQuizzes(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch quizzes:", err);
      });
  }, []);

  const startQuiz = () => {
    if (selectedId) {
      navigate(`/quiz/${selectedId}`);
    }
  };

  return (
    <div className="quizlist-container">
      <h2>Select a Quiz</h2>

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

      <br />
      <br />

      <button onClick={startQuiz} disabled={!selectedId}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizList;
