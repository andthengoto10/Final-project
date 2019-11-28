import React, { Component } from "react";
import "./Time.css";
import img from "./Time.png";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={img} alt="" />
      </div>
    );
  }
}

export default Time;
