import React, { useState } from "react";
import "./Login.css";
import { FaUserShield, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setServerMessage("");

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);

        const response = await fetch(`${API_BASE_URL}login.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, role }), // 👈 send role
        });

        const data = await response.json();

        if (data.status === "success") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("role", role);

          navigate("/dashboard");
        } else {
          setServerMessage(data.message || "Login failed");
        }
      } catch (error) {
        setServerMessage("Server error. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* 🔄 Switch */}
        <div className="switch-container">
          <div className={`slider ${role === "user" ? "right" : "left"}`}></div>

          <div
            className={`switch-option ${role === "admin" ? "active" : ""}`}
            onClick={() => setRole("admin")}
          >
            <FaUserShield />
          </div>

          <div
            className={`switch-option ${role === "user" ? "active" : ""}`}
            onClick={() => setRole("user")}
          >
            <FaUser />
          </div>
        </div>

        <h2>{role === "admin" ? "Admin Login" : "User Login"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
              />
              T & C Apply
            </label>

            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <div className="button-wrapper">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : `Login as ${role}`}
            </button>
          </div>

          {serverMessage && (
            <p className="server-message">{serverMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;