import React from "react";
import "./Dbapi.css";

const db = {
  display: "flex",
  height: "650px",
  width: "fit-content"
};

const monitor = {
  margin: "10px",
  height: "610px"
};
export default class DbApi extends React.Component {
  render() {
    return (
      <div className="DB" style={db}>
        <iframe
          title="Düsseldorf, Derendorf S"
          style={monitor}
          src="http://haltestellenmonitor.vrr.de/monitor/8fdf5af2ff9b13b5f69c9bf82bdf8b16"
          frameborder="0"
        ></iframe>

        <iframe
          title="Düsseldorf, Alter Schlachthof"
          style={monitor}
          src="http://haltestellenmonitor.vrr.de/monitor/6b3bd3e2d5d8ed60988f91341bc2bfb3"
          frameborder="0"
        ></iframe>

        <iframe
          title="Düsseldorf, Rather Str."
          style={monitor}
          src="http://haltestellenmonitor.vrr.de/monitor/4472df4258117498ffb7870124088bb0"
          frameborder="0"
        ></iframe>
      </div>
    );
  }
}
