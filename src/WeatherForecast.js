import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    //console.log(response.data);
  }
  if (loaded) {
    return (
      <div className="col-sm-4">
        <div className="card over">
          <p className="SignatureForecast">Forecast for next 4 days after</p>

          <div className="card-body" id="weather-forecast">
            <div className="container forecastBody">
              <WeatherForecastDay info={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e947cb2640f1db92e6a19005bc43b435";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let IpUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(IpUrl).then(handleResponse);
    return null;
  }
}
