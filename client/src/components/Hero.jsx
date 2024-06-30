import React from "react";
import image from "../images/heroimg.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Wellness Manager is dedicated to revolutionizing how you manage your health.
         By offering personalized wellness solutions, real-time updates, and easy access to top healthcare providers, we turn health care into a proactive and personalized journey.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;