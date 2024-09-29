import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroImage1 from "../../../../../Assets/HeroImage1.jpg";
import HeroImage2 from "../../../../../Assets/HeroImage2.jpg";
import HeroImage3 from "../../../../../Assets/HeroImage3.jpg";
import HeroImage4 from "../../../../../Assets/HeroImage4.jpg";

const Hero = () => {
  const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];

  // Custom Arrows for navigation
  const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick}>
        <FaArrowLeft size={30} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick}>
        <FaArrowRight size={30} />
      </button>
    );
  };

  const settings = {
    dots: true, // Enable dot indicators
    infinite: true, // Infinite scrolling of images
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Time interval of 2 seconds
    arrows: true, // Enable left/right navigation arrows
    prevArrow: <PreviousArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    appendDots: (dots, index) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: "white",
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px",
        }}
      />
    ),
  };

  return (
    <div className="relative w-[80%] mx-auto  rounded-md">
      {/* Adjust container width */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full group cursor-pointer">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[75vh] object-cover rounded-md mx-auto"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-md"></div>
            {/* Text overlay */}
            <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="text-xl font-bold text-primary my-3">
                Hot Products
              </h4>
              <h2 className="text-3xl font-bold text-white w-[40%] text-center">
                You will find the Best Quality Products Here..
              </h2>
            </div>
          </div>
        ))}
      </Slider>
      {/* Custom Styling for Active and Inactive Dots */}
      <style>
        {`
          .slick-dots li.slick-active div {
            background: black !important; /* Black dot for active image */
          }

          .slick-dots li div {
            background: white !important; /* White dot for inactive images */
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
