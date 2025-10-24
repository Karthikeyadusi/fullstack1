// src/routes/index.js
import express from "express";
import authRoutes from "./authRoutes.js";
import eventRoutes from "./eventRoutes.js";
import feedbackRoutes from "./feedbackRoutes.js";
import notificationRoutes from "./notificationRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/events", eventRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/notifications", notificationRoutes);
router.use("/users", userRoutes);

export default router;
