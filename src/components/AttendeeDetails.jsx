import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AttendeeDetails = ({ onNext }) => {
  

  return (
    <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      marginTop: "2rem",
      backgroundColor:"red "
    }}
  >
    <div className="ticket-container">
      {/* Ticket Header */}
      <div className="ticket-header">
        <h3>Attendee Details</h3>
        <h5 className="ticket-paging">Step 2/3</h5>
      </div>

      <hr />

      <div className="ticket-case">
        {/* main header for ticket */}
        <div className="ticket-main">
          <h2 className="text-select" style={{textAlign:"left"}}>Upload Profile Photo</h2>
          <div className="ticket-upload">
            <input type="file" id="file" />
          </div>


        </div>

        <hr className="hr-styling" />

        {/* ticket access */}
        <h5 className="text-select">Select Ticket Type:</h5>
        

      

       { /*Button */}
       <div className="round">
          <button className="back">Back</button>
          <button className="next" onClick={onNext}>Next</button>
       </div> <br />

      </div> <br />
    </div>
  </section>
  );
};
export default AttendeeDetails;
