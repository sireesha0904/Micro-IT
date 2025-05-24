import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Game</h1>
      <p>Test your knowledge with fun quizzes!</p>
      <Link to="/auth">
        <button className="start-btn">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
