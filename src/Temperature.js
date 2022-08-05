import React from "react";
import WeatherDetails from "./WeatherDetails";
import "./WeatherDetails.css";
import "./App.css";

export default function Temperature() {
  return (
    <div>
      <span className="sun">☀ </span>
      <span className="degree">65</span>
      <span className="units"> °F</span>
      <span className="clearfix">
        <div style={{ float: "right" }}>
          <WeatherDetails humidity={59} wind={8} />
        </div>
      </span>
    </div>
  );
}
