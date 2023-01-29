import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormatDate from "./FormatDate";
export default function Weather() {
  //const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemperature(response) {
    //console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      description: response.data.weather[0].main,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature_max: response.data.main.temp_max,
      temperature_min: response.data.main.temp_min,
      ready: true,
    });
    // setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="card over">
              <div className="card-body">
                <form className="research" id="research-form">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Weather in city:
                    </label>
                    <div className="row">
                      <div className="col-9">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter your city"
                        />
                      </div>

                      <div className="col-3">
                        <button type="submit" className="btn btn-primary">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form className="city_day">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>"City"</h2>
                    </div>
                    <div className="col-sm-6 visible_day">
                      <FormatDate date={weatherData} />
                    </div>
                  </div>
                </form>
                <WeatherInfo data={weatherData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9c340174dce0d0c11428fd78107dfdf3";
    let city = "Dnipro";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
    return "loading...";
  }
}
