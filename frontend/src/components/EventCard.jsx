// src/components/EventCard.jsx
import React from "react";

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-indigo-700">{event.title}</h2>
      <p className="text-gray-600 mt-2">{event.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        📍 {event.location} | 📅{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default EventCard;
