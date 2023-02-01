import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import FormatDate from "./FormatDate";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.searchCity);

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
  function search() {
    const apiKey = "9c340174dce0d0c11428fd78107dfdf3";
    // let city = "Dnipro";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    //searchfor a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="card over" id="field">
              <div className="card-body">
                <form
                  className="research"
                  id="research-form"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                      id="form-label"
                    >
                      Weather in city:
                    </label>
                    <div className="row">
                      <div className="col-9">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Enter your city"
                          autoFocus="on"
                          onChange={handleCityChange}
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
                      <h2 id="city_name">{weatherData.city}</h2>
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
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
