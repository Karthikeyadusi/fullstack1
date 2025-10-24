// src/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// ✅ Corrected imports
import authRoutes from "./routes/authRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Configure CORS correctly
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fullstack-project-vy2a.onrender.com", // if your frontend is on Render
      "https://college-event-portal-frontend.vercel.app", // <-- replace this with your actual Vercel frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("College Event Portal Backend is running 🚀");
});

// ✅ Port config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
