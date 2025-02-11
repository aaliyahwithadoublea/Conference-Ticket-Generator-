import React from "react";
import "../index.css";

const TicketReady = () => {
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
        <h5> Check your email for a copy or you can download</h5>
      </div>
    </section>
  );
};

export default TicketReady;
