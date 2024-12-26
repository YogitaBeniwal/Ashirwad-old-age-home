import React from "react";
import "../App.css";
import oldPeopleVideo from "./images/oldpeople.mp4"; 
import { Button } from "./Button";
import "./HeroSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVideo } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={oldPeopleVideo} autoPlay loop muted className="background-video" />
      <h2 className="heading">Care Awaits</h2>
      <h3 className="heading2">Offering a loving Environment for Our Senior Family Members
      at Ashirwad old age home we take care of the elderly like our own family.</h3>
      <h3 className="heading3">We provide them with the love and care they need.</h3>
      <div className="hero-btn">
      <Button
  className="btns"
  buttonSize="btn--large"
  buttonStyle="btn--outline"
  href="https://www.google.com/maps/place/Ashirwad+old+age+home/@18.4534474,73.7982161,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295cab56d78bb:0xa8af2f7f7b812285!8m2!3d18.4534474!4d73.7982161!16s%2Fg%2F11k9bl27qf?hl=en-IN&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
  Locate us
</Button>

        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary " href="/contact-us">
          Get in Touch 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
