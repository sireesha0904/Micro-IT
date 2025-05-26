import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import StartQuiz from "./pages/StartQuiz"; // Import the Quiz component
import QuizList from "./pages/QuizList";
import "./App.css";
// Import Quiz component when ready

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizzes" element={<QuizList />} />
      <Route path="/quiz/:quizId" element={<StartQuiz />} />
      <Route path="/auth" element={<Auth />} />

      {/* <Route path="/quiz/:quizId" element={<Quiz />} /> */}
    </Routes>
  );
}

export default App;
