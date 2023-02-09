import React from "react";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <div className="whatsapp-text">Call us/ Whatsapp</div>
      <div className="whatsapp-text">
        <span>
          {" "}
          <lord-icon
            src="https://cdn.lordicon.com/rzlaxyfo.json"
            trigger="hover"
            colors="primary:#3a3347,secondary:#2ca58d,tertiary:#e83a30"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </span>
        <span>9548247647 / 8923931788</span>
      </div>
    </div>
  );
};

export default Whatsapp;
