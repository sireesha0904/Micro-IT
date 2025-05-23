import React from "react";

function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your score is {score} out of {total}
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
}

export default Result;
