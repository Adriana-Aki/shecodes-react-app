import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  console.log(city);

  function search() {
    let units = "metric";
    let apiKey = "a62bt3c87f1eoc3b004febcaf4a111f5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayCurrentInfo);
  }

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayCurrentInfo(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temp: response.data.temperature.current,
      hum: response.data.temperature.humidity,
      desc: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  console.log(weatherData);
  console.log("weatherData.city");
  console.log(weatherData.city);
  if (weatherData.ready) {
    return (
      <div>
        <div className="weather-app">
          <header>
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    required
                    className="search-input"
                    id="search-input"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button"
                  />
                </div>
              </div>
            </form>
          </header>
          <div>
            <WeatherInfo data={weatherData} />
            <Forecast forecastCity={weatherData.city} />
          </div>
        </div>
        <footer>
          {" "}
          <p>
            {" "}
            This project was coded by{" "}
            <a
              href="https://portfolio-adrianaj.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Adriana Janockova{" "}
            </a>{" "}
            and is on{" "}
            <a
              href="https://portfolio-adrianaj.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://portfolio-adrianaj.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify{" "}
            </a>{" "}
          </p>{" "}
        </footer>
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <h1>"Loading..."</h1>
      </div>
    );
  }
}
