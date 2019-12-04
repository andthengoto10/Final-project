import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Monitor from "../Monitor/Monitor";
import Members from "../Members/Members";
import Profile from "../Profile/Profile";
import Error from "../Error";
import Nav from "../Nav/Nav";
import Report from "../Report/Report";
import UserProfile from "../UserProfile/UserProfile";
import Kurse from "../Kurse/Kurse";
import Register from "../Register/register";
import Login from "../Login/login";
import LehrerMonitor from "../LehrerMonitor/LehrerMonitor";
import Export from "../Report/export";

import "./Content.css";
import ReportUser from "../ReportUser/ReportUser";

class Content extends Component {
  render() {
    return (
      <div className="content_container">
        <BrowserRouter>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Register} />
              <Route path="/members" component={Members} />
              <Route path="/profile" component={Profile} />
              <Route path="/report" component={Report} />
              <Route path="/kurse" component={Kurse} />
              <Route path="/monitor" component={LehrerMonitor} />
              <Route path="/reportUser" component={ReportUser} />

              <Route path="/login" component={Login} />
              <Route path="/export" component={Export} />

              <Route path="/userProfile" component={UserProfile} />
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
