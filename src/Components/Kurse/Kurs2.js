import React, { Component } from "react";
import Members from "../Members/Members";

class Kurs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Kurs2</h1>
        <Members />
      </div>
    );
  }
}

export default Kurs1;
