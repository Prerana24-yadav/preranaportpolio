import React, { useState } from "react";
import { db } from "../firebase"; // ✅ import db connection
import { ref, push } from "firebase/database"; // ✅ import firebase methods

export default function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a reference to "contacts" in your Realtime DB
      const contactRef = ref(db, "contacts");

      // Push form data to Firebase
      await push(contactRef, formData);

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      👋

      {/* ✅ Add onSubmit and name attributes */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <p><b>Email:</b> preranayadav901@gmail.com</p>
        <p>
          <b>LinkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/in/prerana-yadav-899a69337"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/prerana-yadav-899a69337
          </a>
        </p>
        <p>
          <b>GitHub:</b>{" "}
          <a href="https://github.com/preranayadav901-pixel" target="_blank" rel="noreferrer">
             https://github.com/preranayadav901-pixel
            
          </a>
        </p>
      </div>
    </section>
  );
}
