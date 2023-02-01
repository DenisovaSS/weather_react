import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="temperature_com">
            <span className="city_temp">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="iconDaily">
            <WeatherIcon code={props.data.icon} size={64} />
          </div>
          <div className="container_sint">
            <ul>
              <li className="weather_description">{props.data.description}</li>
              <li>
                Humidity today{" "}
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
