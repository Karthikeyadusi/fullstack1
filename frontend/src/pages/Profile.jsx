import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>👤 Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </>
      ) : (
        <p>No user logged in.</p>
      )}

      <h3>🎯 Participated Events</h3>
      <p>No events participated yet.</p>

      <h3>🏆 Won Events</h3>
      <p>No events won yet.</p>
    </div>
  );
};

export default Profile;
