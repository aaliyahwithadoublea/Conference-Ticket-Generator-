import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <nav className="flex justify-between items-center">
        <img src={logo} className="logo" alt="Logo" onClick={toggleSidebar} />

        <Link to="/events" className="hover:underline">
          Events
        </Link>
        <Link to="/my-tickets" className="hover:underline">
          My Tickets
        </Link>
        <Link to="/about-project" className="hover:underline">
          About Project
        </Link>
        <Link to="/my-tickets">
          <button className="btn">My Tickets →</button>
        </Link>
      </nav>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <Link to="/events" onClick={toggleSidebar}>Events</Link>
        <Link to="/my-tickets" onClick={toggleSidebar}>My Tickets</Link>
        <Link to="/about-project" onClick={toggleSidebar}>About Project</Link>
        <Link to="/my-tickets" onClick={toggleSidebar}>
          <button className="btn">My Tickets →</button>
        </Link>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
