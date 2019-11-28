import React, { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./WetterApi.css";

class WetterApi extends Component {
  render() {
    return (
      <div className="wetter">
        <WeatherDisplay zip={40476} />
      </div>
    );
  }
}

export default WetterApi;
