import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Quiz from "./pages/Quiz"; // Import the Quiz component
import "./App.css";
// Import Quiz component when ready

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/quiz" element={<Quiz />} />
      {/* <Route path="/quiz/:quizId" element={<Quiz />} /> */}
    </Routes>
  );
}

export default App;
