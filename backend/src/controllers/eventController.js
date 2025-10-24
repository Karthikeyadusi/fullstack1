import Event from "../models/eventModel.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({ title, description, date, location, createdBy: req.user._id });
    res.status(201).json(event);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const updateEvent = async (req, res) => {
  try {
    const e = await Event.findById(req.params.id);
    if (!e) return res.status(404).json({ message: "Event not found" });
    e.title = req.body.title ?? e.title;
    e.description = req.body.description ?? e.description;
    e.date = req.body.date ?? e.date;
    e.location = req.body.location ?? e.location;
    const updated = await e.save();
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const deleteEvent = async (req, res) => {
  try {
    const e = await Event.findById(req.params.id);
    if (!e) return res.status(404).json({ message: "Event not found" });
    await e.deleteOne();
    res.json({ message: "Event deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
