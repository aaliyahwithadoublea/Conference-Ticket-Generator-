import React from "react";
import { useState } from "react";
import TicketUploader from "./TicketUploader";
import "../styling/selectedTicket.css";

const TicketType = ({ onClick, type, price, space, isSelected }) => {
  return (
    <div
      className={`ticket-type-container rounded-lg p-4 w-50 flex flex-col gap-2 cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-[#197686] border-[#197686]"
          : "bg-[#082F38] border-[#1A6C79]"
      }`}
      style={{ fontFamily: "Roboto" }}
      onClick={onClick}
    >
      <button>
        {" "}
        <h3 className="text-white font-semibold">{type}</h3>{" "}
      </button>
      <div className="flex justify-between items-center">
        <button>
          {" "}
          <span className="text-gray-300" style={{ fontFamily: "Roboto" }}>
            {space}
          </span>{" "}
        </button>
        <button>
          {" "}
          <span
            className="bg-[#0E464F] text-white px-6 py-2 rounded-md text-sm relative -top-2"
            style={{ fontFamily: "Roboto" }}
          >
            {price}
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default TicketType;
