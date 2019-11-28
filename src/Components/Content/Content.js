import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Monitor from "../Monitor/Monitor";
import Members from "../Members/Members";
import Profile from "../Profile/Profile";
import Error from "../Error";
import Nav from "../Nav/Nav";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Monitor} />
              <Route path="/members" component={Members} />
              <Route path="/profile" component={Profile} />
              <Redirect to="/" />
              <Route path="/404" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Content;