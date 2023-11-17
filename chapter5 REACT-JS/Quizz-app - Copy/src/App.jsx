import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import Quiz from "./Quiz";
import FinalScore from "./FinalScore";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={FinalScore} />
      </Switch>
    </Router>
  );
}

export default App;
