import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Monitor from "./Components/Monitor";
import Members from "./Components/Members";
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div>
          <Nav />
        </div>
        <div className="content">
          <Switch>
            <Route path="/" component={Monitor} exact />
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
