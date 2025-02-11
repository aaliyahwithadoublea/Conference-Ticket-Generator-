import React, { useState } from "react";
import "../index.css";
import envelope from "../assets/envelope.png";

const Form = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateName = (name) => {
    if (!name) return "Name is required.";
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name) ? "" : "Name must contain only letters.";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required.";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) ? "" : "Enter a valid email address.";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name") setErrors({ ...errors, name: validateName(value) });
    if (name === "email") setErrors({ ...errors, email: validateEmail(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);

    setErrors({
      name: nameError,
      email: emailError,
    });

    if (!nameError && !emailError) {
      console.log(formData);
      onNext(); // Navigate to TicketReady.jsx
    }
  };

  // Check if button should be disabled
  const isButtonDisabled = !!errors.name || !!errors.email || !formData.name || !formData.email;

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="text-select">
          Enter Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <br />

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="text-select">
          Enter your email*
        </label>
        <div className="input-container">
          <img src={envelope} alt="Email Icon" className="input-icon" /> &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form input-with-icon"
            placeholder="hello@avioflagos.io"
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <br />

      {/* Special Request Field (Optional) */}
      <div>
        <label htmlFor="specialRequest" className="text-select">
          Special Request:
        </label>
        <textarea
          id="specialRequest"
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          rows="4"
          cols="50"
          className="form textarea"
          placeholder="Textarea (Optional)"
        ></textarea>
      </div>

      <br />

      {/* Buttons */}
      <div className="flex">
        <button type="button" className="free-backBtn">
          Back
        </button>
        <button
          type="submit"
          className={`free-ticketBtn ${isButtonDisabled ? "disabled-button" : ""}`}
          disabled={isButtonDisabled}
        >
          Get My Free Ticket
        </button>
      </div>
    </form>
  );
};

export default Form;
