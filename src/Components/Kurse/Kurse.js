import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Kurs1 from "./Kurs1";
import Kurs2 from "./Kurs2";
import Error from "../Error";
import "./kurs.css";

// const cont = {
//   display: "flex",
//   flexDirection: "row"
// };

const kursDiv = {
  height: "100px",
  width: "160px",
  backgroundColor: "#3dd7ac",
  margin: "10px 10px",
  borderRadius: "5px"
};

class Kurse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="kurs_container">
        <BrowserRouter>
          <div className="kursen_container">
            <Link to="/kurs1">
              <div className="kurs" style={kursDiv}>
                <h2>Neues Kurs</h2>
              </div>
            </Link>
            <Link to="/kurs1">
              <div className="kurs" style={kursDiv}>
                <h2>Vollzeit Kurs</h2>
              </div>
            </Link>
            <Link to="/kurs2">
              <div className="kurs" style={kursDiv}>
                <h2>Teilzeit Kurs</h2>
              </div>
            </Link>
          </div>
          <div className="kurse">
            <Switch>
              <Route exact path="/kurs1" component={Kurs1} />
              <Route exact path="/kurs2" component={Kurs2} />
              <Route path="/404" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Kurse;
