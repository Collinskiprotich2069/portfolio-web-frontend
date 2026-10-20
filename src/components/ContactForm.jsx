import React, { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://collins-kiprotich-portfolio-api.onrender.com/api/message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ first_name: "", last_name: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            background: "#3c2d80",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {status && (
        <p style={{ marginTop: "15px", textAlign: "center" }}>{status}</p>
      )}
    </div>
  );
}
