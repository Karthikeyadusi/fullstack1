import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Discover & Manage College Events 🎉</h1>
        <p className="hero-subtitle">
          Explore, organize, and participate in amazing college events — all in
          one place. Connect students, organizers, and experiences effortlessly.
        </p>

        <div className="hero-buttons">
          <a href="/events" className="btn btn-primary">
            Browse Events
          </a>
          <a href="/dashboard" className="btn btn-outline">
            Go to Dashboard
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
            alt="Calendar"
            className="feature-icon"
          />
          <h3>Upcoming Events</h3>
          <p>
            Stay updated with college fests, workshops, and cultural programs.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            alt="People"
            className="feature-icon"
          />
          <h3>Connect & Collaborate</h3>
          <p>
            Meet students, team up for events, and share your experiences with
            the community.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
            alt="Organizer"
            className="feature-icon"
          />
          <h3>Organize Easily</h3>
          <p>
            Create, manage, and promote your college events with just a few
            clicks.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        Built for students & organizers 💡 | © 2025 CollegeEvents
      </footer>
    </div>
  );
};

export default Home;
