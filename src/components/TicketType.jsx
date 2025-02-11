import React from "react";
import TicketUploader from "./TicketUploader"; 

const TicketType = ({ className, type, price, space }) => {

    const isRegular = type.trim() === "REGULAR ACCESS";
    const cardStyles = isRegular
      ? "border border-[#197686] bg-[#197686]" 
      : "border border-[#1A6C79] bg-[#082F38]"; 
  return (
    <div className={`rounded-lg p-4 w-50 flex flex-col gap-2 h ${cardStyles}`} style={{fontFamily:"Roboto"}}>
    <h3 className="text-white font-semibold">{type}</h3>
    <div className="flex justify-between items-center">
      <span className="text-gray-300" style={{fontFamily:"Roboto"}}>{space}</span>
      <span className="bg-[#0E464F] text-white px-6 py-2 rounded-md text-sm relative -top-6" style={{fontFamily:"Roboto"}}>
        {price}
      </span>
    </div>
  </div>
  );
};

export default TicketType;
