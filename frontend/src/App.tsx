import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <Router>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;