import React from "react";

const Header = () => {
  return (
    <div className="header ">
      <div className="info flex align-items">
        <div className="flex align-items">
          <span className="material-symbols-rounded">mail</span>
          <a href="#!">info@Phoneotrading.com</a>
        </div>
        <div className="flex align-items">
          <span className="material-symbols-rounded">phone_in_talk </span>
          <a href="#!" style={{color:"orange"}}>+91-9876543210</a>
          <span class="material-symbols-rounded">more_vert</span>
          <a href="#!" style={{color:"yellowgreen"}}>+91-9098159691</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
