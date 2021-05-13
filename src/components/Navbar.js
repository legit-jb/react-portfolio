import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <FontAwesomeIcon icon={["fas", "bars"]} />
        </a>
        <a href="#home" className="ignore" id="logo">
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
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
    </nav>
  );
};

export default Navbar;
