import React from "react";
import TicketReady from "../components/TicketReady";

const MyTicket = ({ profileImageUrl }) => {
  return (
    <div>
      <TicketReady profileImageUrl={profileImageUrl} />
    </div>
  );
};

export default MyTicket;
