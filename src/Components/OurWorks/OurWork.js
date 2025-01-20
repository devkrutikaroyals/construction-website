import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurWork.css";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";

const OurWork = () => {
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 images horizontally
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows (now they are styled)
  };

  const photos = [
    { id: 1, src: work1, alt: "Project 1" },
    { id: 2, src: work2, alt: "Project 2" },
    { id: 3, src: work3, alt: "Project 3" },
    { id: 4, src: work4, alt: "Project 4" },
  ];

  return (
    <div className="our-work">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Our Work</h1>
        <p>Take a look at some of our proudest accomplishments.</p>
      </div>

      {/* Photo Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {photos.map((photo) => (
            <div key={photo.id} className="slider-item">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurWork;
