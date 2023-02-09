import React from "react";
import Flipcard from "./Flipcard";
const About = () => {
  return (
    <>
      <h2 className="about-heading">What We Provide</h2>
      <p style={{ padding: "1rem 2rem", color: "#03001C" }}>
        We Provide Recommendations Live Through SMS & Live Chat Services. Our
        SMS Facility Is A Very Effective System Which Ensures The Instant
        Message Delivery Without Any Loss Of Time, So The Clients Get Sufficient
        Time To Execute Their Trades In Order To Fetch Maximum Profits.
      </p>

      <Flipcard />
    </>
  );
};

export default About;
