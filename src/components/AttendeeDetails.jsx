import { useState } from "react";
import TicketUploader from "./TicketUploader";
import "../index.css";
import Form from "./Form";

const AttendeeDetails = ({ onNext }) => {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        marginTop: "2rem",
      }}
    >
      <div className="ticket-container">
        <div className="ticket-header">
          <h3>Attendee Details</h3>
          <h5 className="ticket-paging">Step 2/3</h5>
        </div>

        <hr className="hr-two" />

        <div className="ticket-case">
          <div className="ticket-main">
            {/* File Input */}
            <TicketUploader onUpload={setProfileImageUrl} />
          </div>

          <hr className="hr-styling" />

          <Form onNext={onNext} />
        </div>
      </div>
    </section>
  );
};

export default AttendeeDetails;
