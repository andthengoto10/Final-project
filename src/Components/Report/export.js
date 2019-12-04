import React, { Component } from "react";
import bogen from "./fehlzeitbogen.jpg";
class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={bogen} alt="" />
      </div>
    );
  }
}

export default Export;
