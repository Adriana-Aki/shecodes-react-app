import React, { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
    console.log(response.data);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.forecastCity]);

  if (loaded) {
    return (
      <div className="forecast">
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[0]} />
        </div>
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[1]} />
        </div>
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[2]} />
        </div>
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[3]} />
        </div>
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[4]} />
        </div>
        <div className="weather-forecast-day ">
          <ForecastDay data={forecast[5]} />
        </div>
      </div>
    );
  } else {
    let city = props.forecastCity;
    let apiKey = "a62bt3c87f1eoc3b004febcaf4a111f5";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(handleForecast);
    console.log("forecast city in else");
    console.log(city);
    return null;
  }
}
