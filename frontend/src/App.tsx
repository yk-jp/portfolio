import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
const App = () => {
  return (
    <Router>
      <Hero />
      <AboutMe />
    </Router>
  );
}

export default App;