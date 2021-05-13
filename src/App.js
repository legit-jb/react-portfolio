import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

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
