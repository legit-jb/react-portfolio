import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
};

export default App;
