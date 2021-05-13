import React from "react";
import me from "../assets/images/me.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className="row" id="about">
      <div>
        <img
          id="my-image"
          src={me}
          width="200px"
          height="200px"
          alt="me"
        />
      </div>
      <div className="card" id="name">
        <h1>J Brennan</h1>
        <span>Full Stack Developer</span>
      </div>
      <p className="card" id="about-me">
        <span>Forged in Philly.</span>
        <span>Tested by Temple University and University of Pennsylvania.</span>
        <span>
          Trained by <FontAwesomeIcon icon={['fab', 'apple']} />
        </span>
        <span>And working for you.</span>
      </p>
    </div>
  );
};

export default About;
