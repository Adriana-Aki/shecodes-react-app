import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("Barcelona");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [hum, setHum] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function handleClick(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayCurrentInfo);
    // console.log(apiUrl);
    // axios.get(apiUrl).then(showTemperature);
  }

  function displayCurrentInfo(response) {
    console.log(response);
    setTemp(response.data.temperature.current);
    setHum(response.data.temperature.humidity);
    setDesc(response.data.condition.description);
    setWind(response.data.wind.speed);
    setIcon(
      `<img src="${response.data.condition.icon_url}" className="weather-app-icon" />`
    );
  }

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  return (
    <body>
      <div className="weather-app">
        <header>
          <form id="search-form">
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
                  onClick={handleClick}
                />
              </div>
            </div>
          </form>
        </header>
        <main>
          <div className="current-weather">
            <h1 className="current-city" id="current-city">
              {city}
            </h1>
            <ul className="current-info">
              <li id="current-date">datum</li>
              <li id="description">{desc}</li>
            </ul>
            <div className="row align-items-center weather-info">
              <div className="col-md-8 align-self-center">
                <div class="current-temperature ">
                  <span className="current-temperature-icon">{icon}</span>
                  <span className="current-temperature-value">
                    {Math.round(temp)}
                  </span>
                  <span className="current-temperature-unit">°C</span>
                </div>
              </div>
              <div className="col-md-4 align-self-center">
                <ul className="current-details">
                  <li>
                    Humidity: <strong>{hum}%</strong>
                  </li>
                  <li>
                    Wind: <strong>{wind}km/h</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://portfolio-adrianaj.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Adriana Janockova
          </a>{" "}
          and is on{" "}
          <a
            href="https://portfolio-adrianaj.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://portfolio-adrianaj.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </body>
  );
}
