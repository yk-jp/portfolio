import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Router>
      <Hero />
    </Router>
  );
}

export default App;