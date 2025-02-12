import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SelectTicket from "../components/SelectTicket";
import AttendeeDetails from "../components/AttendeeDetails";
import TicketReady from "../components/TicketReady"; 

const Events = () => {
  const [step, setStep] = useState(1);
  const [profileImageUrl, setProfileImageUrl] = useState("");

  return (
    <div>
      {/* <Navbar /> */}
      {step === 1 && <SelectTicket onNext={() => setStep(2)} />}
      {step === 2 && <AttendeeDetails onNext={() => setStep(3)} onUpload={setProfileImageUrl} />}
      {step === 3 && <TicketReady profileImageUrl={profileImageUrl} />} 
    </div>
  );
};

export default Events;
