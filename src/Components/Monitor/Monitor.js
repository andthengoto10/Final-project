import React, { Component } from "react";
import DbApi from "./Dbapi/Dbapi";
import Time from "./Time/Time";
import WetterApi from "./WetterApi/WetterApi";
import "./Monitor.css";

class Monitor extends Component {
  state = {};
  render() {
    return (
      <div>
        <Time />
        <WetterApi />
        <DbApi />{" "}
      </div>
    );
  }
}

export default Monitor;
