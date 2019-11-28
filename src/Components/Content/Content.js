import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Monitor from "../Monitor/Monitor";
import Members from "../Members/Members";
import Profile from "../Profile/Profile";
import Error from "../Error";
import Nav from "../Nav/Nav";

class Content extends Component {
  render() {
    return (
      <div class="content">
        <BrowserRouter>
          <Nav />
          {/* <div>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Monitor</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/members">Members</Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </BrowserRouter>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Monitor} />
              <Route path="/members" component={Members} />
              <Route path="/profile" component={Profile} />
              <Redirect to="/" />
              <Route path="/404" component={Error} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Content;
