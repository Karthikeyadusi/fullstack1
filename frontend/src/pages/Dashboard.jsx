import React from "react";

const Dashboard = () => {
  const stats = [
    { label: "Total Events", value: 12, color: "#4B0082" },
    { label: "Upcoming Events", value: 3, color: "#2E8B57" },
    { label: "Registered Users", value: 245, color: "#FF8C00" },
    { label: "Feedbacks Received", value: 68, color: "#1E90FF" },
  ];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", color: "#4B0082" }}>📊 Dashboard</h1>
      <p style={{ marginTop: "0.5rem", color: "#555" }}>
        Overview of college event activity and engagement
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              width: "220px",
              padding: "1.5rem",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2 style={{ color: item.color, marginBottom: "0.5rem" }}>
              {item.value}
            </h2>
            <p style={{ color: "#333", fontWeight: "500" }}>{item.label}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ color: "#2E8B57", marginBottom: "1rem" }}>
          🔧 Quick Actions
        </h2>
        <button
          style={{
            background: "#4B0082",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            margin: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Redirecting to Add Event page...")}
        >
          ➕ Add New Event
        </button>
        <button
          style={{
            background: "#2E8B57",
            color: "white",
            border: "none",
            padding: "0.8rem 1.5rem",
            margin: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Viewing registered users...")}
        >
          👥 View Registered Users
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
