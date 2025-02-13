import React from "react";

const truncateText = (text, maxLength = 7) => {
  return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const TicketDetails = ({ userDetails = {} }) => {
  if (!userDetails) {
    return <p>Loading ticket details...</p>;
  }
  return (
    <div className="max-w-sm text-white p-2 rounded-md respond-con">
      {/* Name and Email Section */}
      <div className="grid grid-cols-2 grid-rows-2 text-sm text-gray-300 fontyy">
        <div
          className="p-4 border-r border-b bits"
          style={{
            borderRight: "1px solid #12464E",
            borderBottom: "1px solid #12464E",
          }}
        >
          <p>Enter your name</p>
          <p className="font-bold text-md text-white">
            {" "}
            {truncateText(userDetails.name) || "N/A"}
          </p>
        </div>

        <div
          className="p-4 border-b"
          style={{ borderBottom: "1px solid #12464E" }}
        >
          <p>Enter your email *</p>
          <p className="font-bold text-md text-white">
            {truncateText(userDetails.email) || "N/A"}
          </p>
        </div>

        {/*  Ticket Type and Ticket for section */}
        <div
          className="p-4 border-r"
          style={{ borderRight: "1px solid #12464E" }}
        >
          <p>Ticket Type:</p>
          <p className="font-bold text-white">
            {" "}
            {userDetails.ticketType || "N/A"}
          </p>
        </div>

        <div className="p-4">
          <p>Ticket for :</p>
          <p className="font-bold text-white">
            {userDetails.ticketQuantity || "N/A"}
          </p>
        </div>
      </div>

      {/* Special Request */}
      <div className="border-t border-gray-500 mt-1 pt-2 text-sm text-gray-300 speccy">
        <p>Special request?</p>
        <p className="text-white text-md">
          {userDetails.specialRequest || "None"}
        </p>
      </div>
    </div>
  );
};

export default TicketDetails;
