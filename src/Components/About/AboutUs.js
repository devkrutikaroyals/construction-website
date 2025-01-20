import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import AboutImage from "../images/About1.jpg";

<img src={AboutImage} alt="Construction Team Working" />


const AboutUs = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-us">
    
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <h2>Building Dreams with Excellence</h2>
          <p>Shaping the future, one project at a time.</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="content">
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              At <strong>Your Company Name</strong>, we specialize in providing
              reliable, innovative, and sustainable construction solutions. With
              a team of experienced professionals, we transform ideas into
              reality and build lasting legacies.
            </p>
          </div>
          <div
  className="image"
  data-aos="fade-up"
>
  <img src={AboutImage} alt="Construction Team Working" />
</div>

        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission and Vision</h2>
        <div className="content">
          <div className="mission" data-aos="fade-right">
            <h3>Our Mission</h3>
            <p>
              To deliver construction projects that exceed expectations while
              fostering innovation and sustainability.
            </p>
          </div>
          <div className="vision" data-aos="fade-left">
            <h3>Our Vision</h3>
            <p>
              To be a global leader in the construction industry, known for
              quality, reliability, and a commitment to the environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
