import React from 'react';
import { getDayName, getTime } from './services/date_helpers';
import './day_details.css';

const getIconUrl = (icon) => {
  return 'http://openweathermap.org/img/w/' + icon + '.png';
}

const DayDetails = ({data}) => {
  let {weather, dt_txt, main} = data;

  return (
    <li className='day-details'>
      <img className='weather-icon' alt="weather-icon" src={getIconUrl(weather[0].icon)}/>
      <div className='description'>
        <strong className='date'>{getDayName(dt_txt)}, {getTime(dt_txt)}</strong>
        <span>{weather[0].description}, {main.temp} C</span>
      </div>
    </li>
  );
}

export default DayDetails;
