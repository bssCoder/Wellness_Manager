import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At Wellness Manager, we are dedicated to your well-being.
             Our innovative platform provides personalized wellness plans, easy appointment scheduling, and instant access to top healthcare professionals.
              With real-time health notifications, comprehensive medical record management, and expert advice, we empower you to take control of your health journey. 
              Experience unparalleled care and support with WellnessManager, where your health is our top priority. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;