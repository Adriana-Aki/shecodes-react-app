import React from "react";
import "./weather.css";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="current-weather">
      <h1 className="current-city" id="current-city">
        {props.data.city}
      </h1>
      <ul className="current-info">
        <li id="current-date">
          <FormatedDate date={props.data.date} />
        </li>
        <li id="description">{props.data.desc}</li>
      </ul>
      <div className="row align-items-center weather-info">
        <div className="col-md-8 align-self-center">
          <div className="current-temperature ">
            <img
              src={props.data.icon}
              alt="Weather icon"
              className="weather-app-icon"
            />
            <span className="current-temperature-value">
              {Math.round(props.data.temp)}
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
        <div className="col-md-4 align-self-center">
          <ul className="current-details">
            <li>
              Humidity: <strong>{props.data.hum}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
