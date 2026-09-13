import "../styles/Contact.css";
import { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);

    //reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Message sent");
  };

  return (
    <>
      <div className="contact-form-container">
        <h2>Contact me</h2>
        <form
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              onClick={(e) => e.stopPropagation()}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onchange={handleChange}
              required
              placeholder="e.g kiprotich collins"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              onClick={(e) => e.stopPropagation()}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onchange={handleChange}
              required
              placeholder="e.g collinskiprotich754@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              onClick={(e) => e.stopPropagation()}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onchange={handleChange}
              required
              placeholder="e.g whats about th website"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              onClick={(e) => e.stopPropagation()}
              onFocus={(e) => e.stopPropagation()}
              id="message"
              name="message"
              value={formData.message}
              onchange={handleChange}
              required
              rows="6"
              placeholder="e.g explain your features"
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        <p>Add Names</p>
      </div>
    </>
  );
}

export default Contact;
