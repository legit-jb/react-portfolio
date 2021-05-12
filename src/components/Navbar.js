import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [responsive, setResponsive] = useState("");

  const collapseNav = () => {
    if (responsive === "responsive") {
      setResponsive("");
    } else {
      setResponsive("responsive");
    }
  };

  return (
    <nav
      className={`navbar ${responsive === "responsive" ? "responsive" : ""}`}
      id="myNav"
    >
      <div className="navRow">
        <a className="icon ignore" onClick={collapseNav}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </a>
        <a href="#" className="ignore" id="logo">
          JB
        </a>
        <div className="ignore" id="spacer"></div>
      </div>
      <a href="#about">about</a>
      <a href="#projects">projects</a>
      <a href="../assets/JBResume.pdf">resume</a>
      <a href="#contact">contact</a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/j-brennan-dev"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </nav>
  );
};

export default Navbar;
