import express from "express";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import { submitFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

// POST /api/feedback
router.post("/", submitFeedback);

export default router;
