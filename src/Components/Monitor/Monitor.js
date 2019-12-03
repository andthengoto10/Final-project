import React, { useState } from "react";
import moment from "moment";
import DbApi from "./Dbapi/Dbapi";
import Weather from "./Weather/Weather";
import PersonList from "./PersonList/PersonList";

import "./Monitor.css";

const monitorStyle = {
  display: "flex",
  margin: "10px",
  height: "-webkit-fill-available",
  justifyContent: "flex-start",
  marginTop: "25px"
};
const Monitor = () => {
  // state to show section
  const [setShowSection] = useState(false);
  const MINUT = 60000;

  // checking time every 10 minutes and hide api section between 7 pm and 8 am
  // setInterval(() => {
  //   setShowSection(moment().format("HH") > 8 && moment().format("HH") < 19);
  // }, 10 * MINUT);

  return (
    <div className="monitor" style={monitorStyle}>
      <PersonList />
      {/* 
      show api only on time
      {showSection &&  
        }

      <div className="api">
        <Weather
          apiKey="5b8aac88f05d77df8cf00012dad30f43"
          city="Düsseldorf"
          country="Germany"
        />
        <DbApi />
      </div> */}
    </div>
  );
};

export default Monitor;
