import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SelectTicket from "../components/SelectTicket";
import AttendeeDetails from "../components/AttendeeDetails";
import TicketReady from "../components/TicketReady"; // Import TicketReady

const Events = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      <Navbar />
      {step === 1 && <SelectTicket onNext={() => setStep(2)} />}
      {step === 2 && <AttendeeDetails onNext={() => setStep(3)} />} 
      {step === 3 && <TicketReady />} 
    </div>
  );
};

export default Events;
