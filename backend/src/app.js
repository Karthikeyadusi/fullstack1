// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API routes (all mounted under /api)
app.use("/api", routes);

// Health check
app.get("/", (req, res) => res.send("College Event Portal API is running"));

// Error handler (should be after routes)
app.use(errorMiddleware);

export default app;
