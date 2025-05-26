import { useEffect, useState } from "react";

function Quiz({ questions, onRestart }) {
  const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft === 0) {
      submitQuiz();
      return;
    }
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  // When user selects an option
  const handleSelect = (questionId, optionIndex) => {
    if (showResult) return; // no change after submission
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  // Calculate score and show results
  const submitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      const selectedIndex = answers[q._id];
      if (selectedIndex !== undefined && q.options[selectedIndex]?.isCorrect) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  return (
    <div className="quiz-container" style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Time Remaining: {timeLeft} seconds</h2>

      {!showResult && (
        <button
          onClick={submitQuiz}
          disabled={Object.keys(answers).length < questions.length}
          style={{ padding: "10px 20px", marginBottom: 20, cursor: "pointer" }}
        >
          Submit Quiz
        </button>
      )}

      {questions.map((q, i) => {
        const selectedIndex = answers[q._id];
        return (
          <div
            key={q._id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Q{i + 1}:</strong> {q.questionText}
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {q.options.map((opt, idx) => {
                const isSelected = idx === selectedIndex;
                let optionStyle = {
                  cursor: showResult ? "default" : "pointer",
                  padding: "8px 12px",
                  border: "1px solid #ccc",
                  marginBottom: "6px",
                  borderRadius: "5px",
                };
                if (showResult) {
                  if (opt.isCorrect) {
                    optionStyle.backgroundColor = "#d4edda"; // green
                    optionStyle.borderColor = "#28a745";
                    optionStyle.color = "#155724";
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle.backgroundColor = "#f8d7da"; // red
                    optionStyle.borderColor = "#dc3545";
                    optionStyle.color = "#721c24";
                  }
                } else if (isSelected) {
                  optionStyle.backgroundColor = "#cce5ff"; // blue highlight
                }
                return (
                  <li
                    key={idx}
                    onClick={() => handleSelect(q._id, idx)}
                    style={optionStyle}
                  >
                    {opt.text}
                  </li>
                );
              })}
            </ul>

            {showResult && (
              <div
                style={{
                  fontStyle: "italic",
                  color: "#555",
                  marginTop: "10px",
                  borderTop: "1px solid #eee",
                  paddingTop: "10px",
                }}
              >
                Explanation: {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {showResult && (
        <div style={{ textAlign: "center" }}>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
          <button
            onClick={() => {
              setAnswers({});
              setShowResult(false);
              setTimeLeft(60);
              setScore(0);
              onRestart?.();
            }}
            style={{ padding: "10px 20px", marginTop: 20, cursor: "pointer" }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
