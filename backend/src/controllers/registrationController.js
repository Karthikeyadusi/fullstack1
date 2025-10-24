import Registration from "../models/registrationModel.js";

export const createRegistration = async (req, res) => {
  try {
    const reg = await Registration.create(req.body);
    res.status(201).json(reg);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getRegistrations = async (req, res) => {
  try {
    const regs = await Registration.find().populate("eventId", "title date");
    res.json(regs);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
