import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String },
  year: { type: String }
}, { timestamps: true });

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
