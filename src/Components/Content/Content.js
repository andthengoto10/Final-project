import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Monitor from "../Monitor/Monitor";
import Members from "../Members/Members";
import Profile from "../Profile/Profile";
import Error from "../Error";
import Nav from "../Nav/Nav";
import Report from "../Report/Report";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="content_container">
        <BrowserRouter>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Monitor} />
              <Route path="/members" component={Members} />
              <Route path="/profile" component={Profile} />
              <Route path="/report" component={Report} />
              {/* <Redirect to="/" /> */}
              <Route path="/404" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Content;
