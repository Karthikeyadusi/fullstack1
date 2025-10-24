import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

     if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);

        // ✅ Add this line to store user info
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
    } else {
        alert(data.message || "Invalid credentials");
    }

    } catch (error) {
      console.error(error);
      alert("Error during login");
    }
  };
  return (
  <div className="login-container">
    <div className="login-box">
      <h2>Welcome Back 👋</h2>
      <p>Login to your CollegeEvents account</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </p>
    </div>
  </div>
)
};