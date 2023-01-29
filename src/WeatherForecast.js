import React from "react";

export default function WeatherForecast() {
  return (
    <div className="col-sm-4">
      <div className="card over">
        <p className="SignatureForecast">Forecast for next 4 days after</p>

        <div className="card-body" id="weather-forecast">
          <div className="container forecastBody">
            <div className="row text-center">
              <div className="col-3">
                Tue <br />
                31/1
              </div>
              <div className="col-6">
                <span className="emoji">1°/5°</span>
              </div>
              <div className="col-3">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  width="60px"
                  alt=""
                  className="forecast_icon"
                  id="forecast_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
