import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <div className="nav-container">
    <nav
      className="flex justify-between items-center"
    >
      <Link to="/events" className="hover:underline">
        <img src={logo} className="logo" />
      </Link>
      <Link to="/events" className="hover:underline">
        Events
      </Link>
      <Link to="/my-tickets" className="hover:underline">
        My Tickets
      </Link>
      <Link to="/about-project" className="hover:underline">
        About Projects
      </Link>
      <Link to="/my-tickets" className="hover:underline color-black"><button className="btn">My Tickets →</button>
      </Link>
    </nav>
    </div>
  );
};

export default Navbar;
