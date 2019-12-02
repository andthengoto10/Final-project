import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Kurs1 from "./Kurs1";
import Kurs2 from "./Kurs2";
import Error from "../Error";

const kursDiv = {};
class Kurse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="kurs_container">
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/kurs1">
                  <i>Kurs1</i>
                </Link>
              </li>
              <li>
                <Link to="/kurs2">
                  <i>Kurs2</i>
                </Link>
              </li>
            </ul>
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
