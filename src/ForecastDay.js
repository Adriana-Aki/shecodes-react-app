import React from "react";
import "./weather.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast-day ">
      <div className="weather-forecast-date">{day()}</div>
      <div className="weather-forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt="Weather icon"
          className="weather-app-icon"
        />
      </div>
      <div className="weather-forecast-temperatures">
        <div className="weather-forecast-temperature">
          <strong> {maxTemperature()}</strong>
        </div>
        <div className="weather-forecast-temperature">{minTemperature()}</div>
      </div>
    </div>
  );
}
