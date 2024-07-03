import React from "react";
import './App.css';
import LandingPage from "./Components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import AdoptPage from "./Components/Adopt-Pet";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/adoptPet">
            <AdoptPage  />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
