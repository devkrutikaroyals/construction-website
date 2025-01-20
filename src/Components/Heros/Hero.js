import React, { useState } from "react";
import "./Hero.css";
import heroVideo from "../images/video.mp4"; // Adjust the path based on your project structure

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContactClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowForm(true);
    }, 1000); // Simulate loader duration
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="hero">
      {/* Background Video */}
      <video
  className="background-video"
  src={heroVideo}
  autoPlay
  loop
  muted
></video>

<div className="hero-content">
  <h1>Build Your Dreams with Us</h1>
  <p>Professional construction solutions for your projects.</p>
  <button className="contact-button" onClick={handleContactClick}>
    Contact Us
  </button>
</div>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/your-phone-number"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src="/path-to-whatsapp-logo.png" alt="WhatsApp" />
      </a>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeForm}>
              &times;
            </span>
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Loader */}
      {loading && <div className="loader"></div>}
    </div>
  );
};

export default Hero;
