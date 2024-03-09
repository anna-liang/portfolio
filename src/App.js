import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Credits } from "./components/Credits";
import { WorkExperience } from "./components/WorkExperience";

export const App = () => {
  const [active, setActive] = useState(
    Array(1).fill(true).concat(Array(4).fill(false))
  );
  const [scrollOffset, setScrollOffset] = useState(window.scrollY);

  const toggleClass = (index) => {
    const updatedActive = [...active];
    for (let i = 0; i < 5; i++) {
      if (i === index || active[i]) updatedActive[i] = !active[i];
    }
    setActive([...updatedActive]);
  };

  const scrollHandler = useCallback(() => {
    setScrollOffset(window.scrollY);
    let currentActive = Array(5).fill(false);
    // home
    if (scrollOffset < 700) currentActive[0] = true;
    // about
    else if (scrollOffset > 700 && scrollOffset < 1800) currentActive[1] = true;
    // work
    else if (scrollOffset >= 1800 && scrollOffset < 2600)
      currentActive[2] = true;
    // projects
    else if (scrollOffset >= 2600 && scrollOffset < 4000)
      currentActive[3] = true;
    // contact
    else if (scrollOffset >= 4000) currentActive[4] = true;
    setActive([...currentActive]);
  }, [scrollOffset]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio">
          <Header active={active} onClick={(i) => toggleClass(i)} />
          <Home />
          <About />
          <WorkExperience />
          <Projects />
          <Contact />
          <Footer />
        </Route>
        <Route path="/portfolio/credits">
          <Credits />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
