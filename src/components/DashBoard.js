import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
export default function DashBoard() {
  return (
    <div className="dashboard">
      <FontAwesomeIcon icon={faCloud} color="white" size="4x" />
      <div className="weather">
        <h2>Cloudy</h2>
        <div className="weather-info">
          <FontAwesomeIcon icon={faTemperatureHalf} color="white" /> 29.2&deg;C
          <FontAwesomeIcon icon={faDroplet} color="white" /> 73%
        </div>
      </div>
    </div>
  );
}
