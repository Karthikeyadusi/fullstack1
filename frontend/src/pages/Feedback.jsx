import React, { useState } from "react";
import "./feedback.css";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://fullstack1-9ei3.onrender.com/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setStatus("❌ Failed to connect to server");
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <h2>We’d Love Your Feedback 💬</h2>
        <p>Tell us what you think about our College Event Platform!</p>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your feedback..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}
