// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/new" component={ContactPage} />
        <Route path="/edit/:id" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
