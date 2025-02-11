import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SelectTicket from "../components/SelectTicket";
import AttendeeDetails from "../components/AttendeeDetails";

const Events = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      <Navbar />
      {step === 1 ? (
        <SelectTicket onNext={() => setStep(2)} />
      ) : (
        <AttendeeDetails />
      )}
    </div>
  );
};

export default Events;
