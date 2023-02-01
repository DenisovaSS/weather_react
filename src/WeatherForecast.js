import React, { useState, useEffect } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    //console.log(response.data);
  }
  if (loaded) {
    return (
      <div className="col-sm-4">
        <div className="card over" id="field">
          <p className="SignatureForecast">Forecast for next 4 days after</p>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5 && index > 0) {
              return (
                <div key={index} className="Allcard">
                  <WeatherForecastDay info={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
