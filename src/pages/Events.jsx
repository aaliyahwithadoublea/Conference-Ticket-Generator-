import React, { useState } from "react";
import SelectTicket from "../components/SelectTicket";
import AttendeeDetails from "../components/AttendeeDetails";
import TicketReady from "../components/TicketReady";

const Events = () => {
  const [step, setStep] = useState(1);
  const [profileImageUrl, setProfileImageUrl] = useState(""); // ✅ Manage image state here

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      {step === 1 && <SelectTicket onNext={goNext} />}
      {step === 2 && (
        <AttendeeDetails 
          onNext={goNext} 
          onBack={goBack} 
          profileImageUrl={profileImageUrl} 
          setProfileImageUrl={setProfileImageUrl}
        />
      )}
      {step === 3 && (
        <TicketReady 
          profileImageUrl={profileImageUrl} />
      )}
    </div>
  );
};

export default Events;
