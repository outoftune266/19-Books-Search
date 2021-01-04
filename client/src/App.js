import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
