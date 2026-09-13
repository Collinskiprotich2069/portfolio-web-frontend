import React, { useState } from "react";

export const ContactForm = ()=> {
  const [formData, setFormdData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormdData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/sendemail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatusMessage(`Failed: $(data.error)`);
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.firstName}
                  name="firstName"
                  placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
                  value={formData.lastName}
                  placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
                  type="email"
                  placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />
        <textarea
                  type="text"
                  placeholder="message"
          value={formData.message}
          name="message"
          onChange={handleChange}
          required
        />
        <button type="submit">Send Mail</button>
      </form>
    </>
  );
}

