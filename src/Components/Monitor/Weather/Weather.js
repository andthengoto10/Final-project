import React, { Component } from 'react';
import './Weather.css';

import DayDetails from './day_details';
import Api from './services/api';

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
        weatherData: {
          list: []
        }
    };
  }

  componentDidMount(){
    Api.get5daysForecast(this.props.city, this.props.country, this.props.apiKey)
      .then((response) => {
        this.updateWeatherData(response)
      });
  }

  updateWeatherData(data) {
    this.setState({
      weatherData: data
    })
  }

  render() {
    return (
      <section className="weather-section">
        <div className="weather-component">
          <strong className="city-name">{this.props.city}</strong>
          <ul className="forecast-list">
          {
            this.state.weatherData.list.slice(0,3).map((dayData) => {
              return <DayDetails data={dayData} key={dayData.dt} />
            })
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Weather;
