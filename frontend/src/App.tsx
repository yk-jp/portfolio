import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";


const App = () => {
  return (
    <Router>
      <Header />
      <div id="AboutMe">Hello</div>
    </Router>
  );
}

export default App;