import React from "react";
import { useState } from "react";
import { TicketAccess } from "../utils/ticketAccess";
import TicketType from "./TicketType";
import DropdownBtn from "./dropdownBtn";
import "../styling/selectedTicket.css";

const SelectTicket = ({ onNext, onBack,  setUserDetails }) => {

  const [selectedTicket, setSelectedTicket] = useState(null);
 
  const handleTicketSelection = (type) => {
    setSelectedTicket(type); 
    setUserDetails((prev) => ({ ...prev, ticketType: type }));
  };

  const handleQuantityChange = (quantity) => {
    setUserDetails((prev) => ({ ...prev, ticketQuantity: quantity }));
  };

  return (
    <section className="smaller">
      <div className="ticket-container">
        {/* Ticket Header */}
        <div className="ticket-header">
          <h3>Text Selection</h3>
          <h5 className="ticket-paging">Step 1/3</h5>
        </div>
        <hr className="reduce" />
        <div className="ticket-case">
          {/* main header for ticket */}
          <div className="ticket-main">
            <h2 className="text-header">Techember Fest ”25</h2>
            <p className="text-sub">
              Join us for an unforgettable experience <br />
              at [Event Name]! Secure your spot now.
            </p>
            <p className="text-sub">
              📍 [Event Location] | | March 15, 2025 | 7:00 PM
            </p>
          </div>
          <hr className="hr-styling" />
          {/* ticket access */}
          <h5 className="text-select">Select Ticket Type:</h5>
          <div className="ticket-mainer">
            <div className="min-h-screen flex items-start justify-center">
              <div className="ticket-grid">
                <div className="flex flex-col gap-4">
                {TicketAccess.slice(0, 2).map((ticket) => (
                    <TicketType
                      {...ticket}
                      key={ticket.type}
                      isSelected={selectedTicket === ticket.type}
                      onClick={() => handleTicketSelection(ticket.type)}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between">
                  <TicketType
                    {...TicketAccess[1]}
                    className="h-full"
                    onClick={() => handleTicketSelection(TicketAccess[1].type)}
                    key={TicketAccess[1].type}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Numbeer of Tickets*/}
          <br />
          <DropdownBtn   onQuantityChange={handleQuantityChange}/>
          {/*Button */}
          <div className="round">
            <button className="back" onClick={onBack}>Cancel</button>
            <button className="next" onClick={onNext}>
              Next
            </button>
          </div>{" "}
          <br />
        </div>{" "}
        <br />
      </div>
    </section>
  );
};

export default SelectTicket;
