import React from "react";

const Card = (props) => {
  return (
    <div className="project card">
        <header>
            {props.name}
        </header>
      <a href={props.href}>
        <img
          className="projectImg"
          src={props.image}
          alt={props.name}
          width={400}
          height={400}
        />
      </a>
      <a href={props.github}>
        github link for credits and info
      </a>
    </div>
  );
  // end of return
};
// end of Card function/component

export default Card;
