import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <body>
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
                        <div className="col-7">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your city"
                          />
                        </div>

                        <div className="col-5">
                          <button type="submit" className="btn btn-primary">
                            Change
                          </button>
                          <button
                            type="button"
                            className="btn btn-success current"
                          >
                            Current
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
                        <h4>Tues, 15:02</h4>
                        <p className="data-today">27 September</p>
                      </div>
                    </div>
                  </form>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="temperature_com">
                          <span className="city_temp">25</span>
                          <span className="units">
                            <a
                              id="celsius"
                              href="http://openweathermap.org/img/wn/10d@2x.png"
                              className="active"
                            >
                              °C
                            </a>{" "}
                            |
                            <a
                              id="fahrenheit"
                              href="http://openweathermap.org/img/wn/10d@2x.png"
                            >
                              °F
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 center">
                        <img
                          src="http://openweathermap.org/img/wn/10d@2x.png"
                          alt=""
                          className="cloud"
                          id="icon"
                        />

                        <div className="container_sint">
                          <div className="weather_description">Cloudy</div>
                          <div>
                            humidity today <span className="humidity">47</span>%
                          </div>
                          <div>
                            <span className="min_temperature"> 10&deg;</span>/
                            <span className="max_temperature"> 25&deg;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card over">
                <p className="SignatureForecast">
                  Forecast for next 4 days after
                </p>

                <div className="card-body" id="weather-forecast"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
