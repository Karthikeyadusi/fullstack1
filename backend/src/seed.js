import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import Event from "./models/eventModel.js";

dotenv.config();

const seed = async () => {
  try {
    await connectDB();
    console.log("🌱 Seeding database...");

    await User.deleteMany();
    await Event.deleteMany();

    const admin = await User.create({
      name: "Admin",
      email: "admin@college.com",
      password: "123456", // will be hashed automatically
      role: "admin",
    });

    const student = await User.create({
      name: "John",
      email: "john@example.com",
      password: "123456", // plain password — your schema hashes it
      role: "student",
    });

    const event = await Event.create({
      title: "Welcome Week",
      description: "Kickoff events for students",
      date: new Date(Date.now() + 7 * 24 * 3600 * 1000),
      location: "Campus Grounds",
      createdBy: admin._id,
    });

    console.log("✅ Users and events created successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error.message);
    process.exit(1);
  }
};

seed();
