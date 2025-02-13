import React from "react";

const AboutProject = () => {
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
        <h3 style={{ color: "#fff" }}>
          Event Ticket Booking UI – Open Source Practice Project 🎟️{" "}
          <pre className="bind" />
          Overview
          <pre className="bind" />
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, <pre /> explore, and build upon. The
          design focuses on a seamless, login-free ticket reservation flow,{" "}
          <pre />
          allowing users to book event tickets quickly and efficiently.
          <pre className="bind" /> The project consists of a three-step ticket
          booking flow, and developers can extend it further by
          <pre /> integrating payment solutions, user authentication (optional),
          and ticket validation systems. <pre className="bind" />
          Flow & Features
          <pre className="bind" /> 1️⃣Ticket Selection
          <pre /> • Users can browse available tickets (Free & Paid). <pre /> •
          Ticket options are displayed in a list or card view. <pre />
          • For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
          details. <pre />• For Paid Tickets → Clicking “Purchase Ticket” would
          ideally open a payment modal.
          <pre className="bind" /> 2️⃣ Attendee Details Form
          <pre /> • Users input their Name, Email, and optional Phone Number.
          <pre /> • Profile picture upload option with preview functionality.{" "}
          <pre />• Ticket summary is visible to ensure users review their
          details before submission. <pre className="bind" /> 3️⃣ Payment or
          Success Page <pre />• If the ticket is free, the user is taken
          directly to the Ticket Confirmation Page.
          <pre /> • If the ticket is paid, developers can integrate Stripe,
          Paystack, or Flutterwave to process <pre />
          payments before showing the confirmation page. <pre /> • Upon
          successful booking, users should receive:
          <pre /> • A visual ticket preview with a unique QR Code. <pre />• An
          option to download the ticket as PDF or save it to their device.
          <pre /> • An email confirmation containing ticket details.
          <pre /> How to Build This 🚀
          <pre className="bind" /> This UI can be implemented using:{" "}
          <pre className="bind" />
          📌 Frontend (Next.js or React)
          <pre /> • Component Breakdown:
          <pre /> • TicketCard.tsx → Displays ticket details <pre />•
          AttendeeForm.tsx → Captures user details
          <pre /> • PaymentModal.tsx → Handles payment processing
          <pre /> • SuccessScreen.tsx → Shows the final ticket preview <pre />•
          State Management: React’s Context API, Zustand, or Redux (if needed).{" "}
          <pre />• File Handling: Users should be able to upload images (profile
          picture for ticket) using Firebase Storage, <pre />
          Cloudinary, or local preview
          <pre /> with URL.createObjectURL().
          <pre className="bind" /> 📌 Backend (Optional)
          <pre /> • If persistence is required, a backend can be built using:{" "}
          <pre /> • Node.js & Express or Firebase Functions <pre />• Database:
          MongoDB, PostgreSQL, or Firebase Firestore to store ticket records{" "}
          <pre className="bind" /> 📌 Payment Integration <pre />• For paid
          events, developers should integrate:
          <pre /> • Stripe Checkout (for international transactions)
          <pre /> • Paystack or Flutterwave (for African users)
          <pre /> What You’ll Learn 🧑‍💻
          <pre /> • File handling & validation (profile picture uploads).{" "}
          <pre />• Dynamic UI updates based on ticket selection. <pre />•
          Persisting bookings using local state or a backend.
          <pre /> • Integrating payment gateways for ticket purchases.
          <pre /> • Generating & validating QR Codes for event check-in
          (Advanced).
          <pre /> Need Help? Reach Out! 💬
        </h3>

        <div
          className="flex"
          style={{
            border: "2px solid #24A0B5",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <button type="button" className="another">
            Book Another Ticket
          </button>
          <button type="submit" className="download">
            Download Ticket
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
