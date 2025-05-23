import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Result from "./Result";

const QUIZ_ID = "644e7f99e3f123456789abcd"; // your actual quiz ID
axios.get(`http://localhost:5000/api/questions/quiz/${QUIZ_ID}`); // Replace with your quiz ObjectId

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/questions/quiz/${QUIZ_ID}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load questions");
        setLoading(false);
      });
  }, []);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      const userAnswerIndex = answers[q._id];
      if (
        userAnswerIndex !== undefined &&
        q.options[userAnswerIndex].isCorrect
      ) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  if (score !== null) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div>
      {questions.map((q) => (
        <Question
          key={q._id}
          question={q}
          selectedOption={answers[q._id]}
          onAnswer={handleAnswer}
        />
      ))}

      <button onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
}

export default Quiz;
