import React, { Component } from "react";
import Members from "../Members/Members";

const hStyle = {
  "text-align": "center"
};

class Kurs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 style={hStyle}>Vollzeit Kurs</h1>
        <Members />
      </div>
    );
  }
}

export default Kurs1;
