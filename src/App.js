import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommend from "./Recommend";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <h1> HOME PAGE</h1>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Recommend />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
