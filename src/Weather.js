import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <body>
        <div className="weather-app">
          <header>
            <form id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    required
                    className="search-input"
                    id="search-input"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button"
                  />
                </div>
              </div>
            </form>
          </header>
          <main>
            <div className="current-weather">
              <div className="row">
                <div className="col-8">
                  <h1 className="current-city" id="current-city">
                    Paris
                  </h1>
                  <div class="current-temperature">
                    <span class="current-temperature-icon">☀️</span>
                    <span class="current-temperature-value">24</span>
                    <span class="current-temperature-unit">°C</span>
                  </div>
                </div>
                <div className="col-4">
                  <ul className="current-details">
                    <li id="current-date">datum</li>
                    <li> moderate rain</li>
                    <li>
                      Humidity: <strong>87%</strong>
                    </li>
                    <li>
                      Wind: <strong>7.2km/h</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <p>
              This project was coded by
              <a
                href="https://portfolio-adrianaj.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Adriana Janockova
              </a>{" "}
              and is
              <a
                href="https://portfolio-adrianaj.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                on GitHub
              </a>{" "}
              and
              <a
                href="https://portfolio-adrianaj.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </body>
    </div>
  );
}
