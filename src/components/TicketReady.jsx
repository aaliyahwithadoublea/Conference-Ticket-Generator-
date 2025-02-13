import React from "react";
import "../styling/ticketReady.css";
import ticket from "../assets/ticket.png";
import barcode from "../assets/Bar-code.png";
import TicketDetails from "./TicketDetails";
import { useNavigate } from "react-router-dom"; 

const TicketReady = ({ profileImageUrl }) => {
  const navigate = useNavigate();

const navigateToEvents = () => {
  console.log("🚀 Navigating to /events...");
  navigate("/events");
};

  

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        marginTop: "2rem",
      }}
    >
      <div className="ticket-container">
        <div className="ticket-header">
          <h3>Ready</h3>
          <h5 className="ticket-paging">Step 3/3</h5>
        </div>

        <hr className="hr-two" style={{ marginTop: "-1rem" }} />

        <h3 className="booked-header">Your Ticket is Booked!</h3>
        <h5 className="booked-smaller">
          Check your email for a copy or you can download
        </h5>

        <div className="ticket-frame">
          <div
            className="ticket-bg depth"
            style={{ backgroundImage: `url(${ticket})` }}
          >
            <div style={{ marginTop: "1rem" }}>
              <div className="ticket-body">
                <h2 className="text-bodyHead">Techember Fest ”25</h2>
                <p className="text-sublet">📍 04 Rumens road, Ikoyi, Lagos</p>
                <p className="text-sublet">📅 March 15, 2025 | 7:00 PM</p>

                {/* Display Uploaded Image */}
                <div className="image-case">
                  {profileImageUrl ? (
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="profile-image"
                    />
                  ) : (
                    <div className="default-placeholder"></div>
                  )}
                </div>

                <div
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #133D44",
                    background: "#08343C",
                    marginTop: "0.6rem",
                  }}
                >
                  <TicketDetails />
                </div>

                <div className="move">
                  <img src={barcode} alt="Barcode" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <button type="button" className="another"onClick={navigateToEvents}>
            Book Another Ticket
          </button>
          <button type="submit" className="download">
            Download Ticket
          </button>
        </div>
      </div>
    </section>
  );
};

export default TicketReady;
