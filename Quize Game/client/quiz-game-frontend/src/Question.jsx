import React from "react";

function Question({ question, selectedOption, onAnswer }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>{question.questionText}</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {question.options.map((opt, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            <label>
              <input
                type="radio"
                name={question._id}
                checked={selectedOption === index}
                onChange={() => onAnswer(question._id, index)}
              />{" "}
              {opt.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
