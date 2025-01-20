import React from "react";
import "./OurWork.css";
import Slider from "react-slick"; // For the slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const OurWork = () => {
  // Images for the slider
  const images = [
    { src: "/images/work1.jpg", alt: "Project 1" },
    { src: "/images/work2.jpg", alt: "Project 2" },
    { src: "/images/work3.jpg", alt: "Project 3" },
    { src: "/images/work4.jpg", alt: "Project 4" },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="our-work">
      {/* Hero Section */}
      <div className="hero">
        <h1>Our Work</h1>
        <p>Explore our portfolio and recent projects.</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurWork;
