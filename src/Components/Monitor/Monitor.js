import React, { Component } from "react";
import DbApi from "../Dbapi/Dbapi";
import "./Monitor.css";

class Monitor extends Component {
  state = {};
  render() {
    return (
      <div>
        <DbApi />{" "}
      </div>
    );
  }
}

export default Monitor;
