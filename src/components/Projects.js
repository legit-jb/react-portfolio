import React from "react";
import Card from "./Card";
import provisions from "../assets/images/provisions.png";
import dayScheduler from "../assets/images/dayScheduler.png";
import noteTaker from "../assets/images/noteTaker.png";
import weatherDash from "../assets/images/weatherDash.jpeg";

const Projects = () => {
  const projArray = [
    {
      name: "Provisions",
      href: "https://legit-jb.github.io/provisions/",
      image: provisions,
      github: "https://github.com/legit-jb/provisions",
    },
    {
      name: "Day Scheduler",
      href: "https://legit-jb.github.io/dayScheduler",
      image: dayScheduler,
      github: "https://github.com/legit-jb/dayScheduler",
    },
    {
      name: "Notes App",
      href: "https://note-taker-jbrennan.herokuapp.com",
      image: noteTaker,
      github: "https://github.com/legit-jb/note-taker",
    },
    {
      name: "Weather Dash App",
      href: "https://legit-jb.github.io/weatherDash",
      image: weatherDash,
      github: "https://github.com/legit-jb/weatherDash",
    },
  ];

  return (
    <section className="projects section">
      <header>projects</header>
      <div id="projects">
        {projArray.map((proj) => (
          <Card {...proj} key={proj.github}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
