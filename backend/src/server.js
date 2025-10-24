// src/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://fullstack-project-vy2a.onrender.com", // frontend on Render
      "https://college-event-portal-frontend.vercel.app", // previous frontend
      "https://fullstack-w9yw.onrender.com", // backend live link (optional)
      "https://fullstack-delta-vert.vercel.app", // NEW frontend link
    ],
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/events", eventsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("College Event Portal Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
