import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleMode = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:5000/api/users/login"
      : "http://localhost:5000/api/users/register";

    try {
      const res = await axios.post(url, formData);
      localStorage.setItem("token", res.data.token);
      navigate("/quizzes");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p onClick={toggleMode} className="toggle-link">
          {isLogin ? "Don't have an account? Sign Up" : "Already a user? Login"}
        </p>
      </div>
    </div>
  );
}

export default Auth;
