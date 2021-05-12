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
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
        <NavLink to="/" className="ignore" id="logo">
          JB
        </NavLink>
        <div className="ignore" id="spacer"></div>
      </div>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="../assets/JBResume.pdf">resume</NavLink>
      <NavLink to="/contact">contact</NavLink>
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
