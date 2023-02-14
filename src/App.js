import React from "react";
import Navbar from "./common/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
