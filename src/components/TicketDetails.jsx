import React from "react";

const TicketDetails = () => {
  return (
    <div className="max-w-sm text-white p-2 rounded-md respond-con">
      {/* Name and Email Section */}
      <div className="grid grid-cols-2 grid-rows-2 text-sm text-gray-300 fontyy" >
        <div
          className="p-4 border-r border-b bits"
          style={{
            borderRight: "1px solid #12464E",
            borderBottom: "1px solid #12464E",
          }}
        >
          <p>Enter your name</p>
          <p className="font-bold text-md text-white">Avi Chukwu</p>
        </div>

        <div
          className="p-4 border-b"
          style={{ borderBottom: "1px solid #12464E" }}
        >
          <p>Enter your email *</p>
          <p className="font-bold text-md text-white">User@email.com</p>
        </div>

        {/*  Ticket Type and Ticket for section */}
        <div
          className="p-4 border-r"
          style={{ borderRight: "1px solid #12464E" }}
        >
          <p>Ticket Type:</p>
          <p className="font-bold text-white">VIP</p>
        </div>

        <div className="p-4">
          <p>Ticket for :</p>
          <p className="font-bold text-white">1</p>
        </div>
      </div>

      {/* Special Request */}
      <div className="border-t border-gray-500 mt-1 pt-2 text-sm text-gray-300 speccy">
        <p>Special request?</p>
        <p className="text-white text-md">
          Nil ? Or the users sad story they write in there gets this whole
          space, Max of three rows
        </p>
      </div>
    </div>
  );
};

export default TicketDetails;
