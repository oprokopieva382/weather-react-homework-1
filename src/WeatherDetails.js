import React from "react";

export default function WeatherDetails(props) {
  return (
    <ul>
      <br />
      <li>
        Humidity: <span>{props.humidity}</span>%
      </li>
      <li>
        Wind: <span>{props.wind}</span>km/h
      </li>
    </ul>
  );
}
