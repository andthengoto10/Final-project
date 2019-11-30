import React, { Component } from "react";
import DbApi from "./Dbapi/Dbapi";
import Weather from "./Weather/Weather";
import PersonList from "./PersonList/PersonList";

import "./Monitor.css";

class Monitor extends Component {
  state = {};
  render() {
    return (
      <div className="monitor">

        <PersonList />

        <div className="api">
          <Weather
              apiKey="5b8aac88f05d77df8cf00012dad30f43" 
              city="Düsseldorf"
              country="Germany"
            />
            
          <DbApi />
        </div>

      </div>
    );
  }
}

export default Monitor;
