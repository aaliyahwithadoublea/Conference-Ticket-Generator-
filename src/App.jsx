import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Navbar from "./components/Navbar"; 
import Events from "./pages/Events";
import MyTicket from "./pages/MyTicket";
import AboutProject from "./pages/AboutProject"; 

function App() {
  const [userDetails, setUserDetails] = useState(() => {
    return JSON.parse(localStorage.getItem("userDetails")) || {};
  });
  const [profileImageUrl, setProfileImageUrl] = useState(() => {
    return localStorage.getItem("profileImageUrl") || "";
  });
  

  return (
    <div className="main-container">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/my-tickets" element={<MyTicket />} />
        <Route path="/about-project" element={<AboutProject profileImageUrl={profileImageUrl} userDetails={userDetails}  />} />
      </Routes>
    </div>
  );
}

export default App;
