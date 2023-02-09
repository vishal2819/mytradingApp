import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="sticky-top">
      <div className="nav-center">
        <div className="nav-header">
        <lord-icon
    src="https://cdn.lordicon.com/xosppmqz.json"
    trigger="hover"
    colors="primary:#4030e8,secondary:#000000"
    style={{width:"60px",height:"60px"}}>
</lord-icon>
          <h3 style={{ fontFamily: "serif" }}>Phoneo Trading</h3>
          <button className="nav-toggle" onClick={toggleLinks}>
            <lord-icon
              src="https://cdn.lordicon.com/gowrcrni.json"
              trigger="hover"
              colors="primary:#2516c7,secondary:#cb5eee"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            <li>
              {" "}
              <button class="btn">
                <span class="btn-text-one">Get Trial</span>
                <span class="btn-text-two">Great!</span>
              </button>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
