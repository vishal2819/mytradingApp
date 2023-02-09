import React from "react";

const Flipcard = () => {
  return (
    <div className="card-flip">
      <div class="flip-card ">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <lord-icon
              src="https://cdn.lordicon.com/cjyxqyly.json"
              trigger="hover"
              colors="primary:#242424,secondary:#c7166f,tertiary:#fad1e6"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>
              India's quickest financial learning platform, Quest provides you
              with practical courses that align with your attention span,
              #BeHungry
            </p>
            <button className="btn">Click Me</button>
          </div>
        </div>
      </div>{" "}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <lord-icon
              src="https://cdn.lordicon.com/flvisirw.json"
              trigger="hover"
              colors="primary:#30e8bd,secondary:#ee6d66,tertiary:#0a4e5c"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <div class="flip-card-back">
            <p>
              A platform integrating scientific financial planning,
              expert-taught courses, business-grade stock analysis and
              well-researched journalistic articles for an absolute experience.
            </p>
            <button className="btn">Click Me</button>
          </div>
        </div>
      </div>{" "}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <lord-icon
              src="https://cdn.lordicon.com/oqhlhtfq.json"
              trigger="hover"
              colors="primary:#c7166f,secondary:#ebe6ef"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div>
          <div class="flip-card-back">
            <p>You pay separately for stock lessons, stock recommendations</p>
            <button className="btn">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
