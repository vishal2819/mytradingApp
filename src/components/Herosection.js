import React from "react";

const Herosection = () => {
  return (
    <div className="flex flex-column">
      <lord-icon
        src="https://cdn.lordicon.com/twprnhsj.json"
        trigger="hover"
        colors="primary:#104891,secondary:#7166ee"
        stroke="55"
        style={{ margin: "0 auto", width: "200px", height: "200px" }}
      ></lord-icon>
      <div className="hero flex">
        <div className="slogan flex flex-column">
          <h1>
            Make investing simple{" "}
            <span className="highlight-text">and rewarding for everyone.</span>
          </h1>
          <button class="btn" style={{ margin: "1rem" }}>
            <span class="btn-text-one">Call now</span>
            <span class="btn-text-two">Connected 👍</span>
          </button>
        </div>
        <div className="">
          <img
            className="hero-image col"
            src="https://media.giphy.com/media/J67tc7pMoTrRlkUikG/giphy.gif"
            alt="Giphy"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
