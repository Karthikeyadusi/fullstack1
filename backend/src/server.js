import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fullstack-project-vy2a.onrender.com", // 👈 your Render frontend (if same)
      "https://your-frontend-deployed-url.com"        // 👈 add your frontend if hosted separately
    ],
    credentials: true,
  })
);


app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes); // 👈 Added feedback route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("College Event Portal Backend is running 🚀");
});
