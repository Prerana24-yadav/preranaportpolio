import React from "react";


export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Let's connect and collaborate.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="mobil" placeholder="Enter Mobile Number/"/>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
