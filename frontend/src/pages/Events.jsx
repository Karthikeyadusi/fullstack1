import React from "react";

const events = [
  {
    title: "Tech Fest 2025",
    date: "November 10, 2025",
    location: "Auditorium Hall A",
    description: "A 2-day festival celebrating technology, innovation, and creativity with workshops, hackathons, and guest speakers.",
  },
  {
    title: "Cultural Night",
    date: "December 1, 2025",
    location: "Open Ground",
    description: "An evening of music, dance, drama, and fun celebrating the diverse cultures of our college community.",
  },
  {
    title: "Startup Pitch Day",
    date: "January 5, 2026",
    location: "Innovation Lab",
    description: "Pitch your startup ideas to investors and mentors. Great opportunity to showcase your entrepreneurial spirit!",
  },
];

const Events = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#4B0082" }}>
        🌟 Upcoming Events
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              width: "300px",
              padding: "1.5rem",
              textAlign: "left",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ color: "#2E8B57", marginBottom: "0.5rem" }}>
              {event.title}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              📅 {event.date}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              📍 {event.location}
            </p>
            <p style={{ marginTop: "0.8rem", color: "#333" }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
