import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.info.temp.max);
    return temperature;
  }
  function minTemperature() {
    let temperature = Math.round(props.info.temp.min);
    return temperature;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.info.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }
  function date() {
    let date = new Date(props.info.dt * 1000);
    let numberDate = date.getDate();
    let month = date.getMonth();
    let monthAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let months = monthAll[month];
    if (months < 10) {
      months = `0${months}`;
    }
    if (numberDate < 10) {
      numberDate = `0${numberDate}`;
    }
    return `${numberDate}/${months} `;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="card-body" id="weather-forecast">
        <div className="container forecastBody">
          <div className="row text-center">
            <div className="col-3">
              {day()} <br />
              {date()}
            </div>
            <div className="col-6">
              <span className="emoji">
                {minTemperature()}°/{maxTemperature()}°
              </span>
            </div>
            <div className="col-3">
              <WeatherIcon code={props.info.weather[0].icon} size={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
