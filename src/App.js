import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommend from "./Recommend";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
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
