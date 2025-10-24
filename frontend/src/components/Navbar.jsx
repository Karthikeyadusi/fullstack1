import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
return ( <nav className="navbar"> <div className="logo">🎓 CollegeEvents</div> <ul> <li>
<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
Home </NavLink> </li> <li>
<NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
Events </NavLink> </li> <li>
<NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
Dashboard </NavLink> </li> <li>
<NavLink to="/feedback" className={({ isActive }) => (isActive ? "active" : "")}>
Feedback </NavLink> </li> <li>
<NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
Profile </NavLink> </li> <li>
<NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
Login </NavLink> </li> </ul> </nav>
);
};

export default Navbar;
