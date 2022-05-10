import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons"
import { faDroplet, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { getWeatherStatus } from "../../services/weather"
export default function Weather() {
  const [weather, setWeather] = useState({})
  const _getStatus = async () => {
    const status = await getWeatherStatus
    setWeather(status)
  }
  useEffect(() => {
    _getStatus()
  }, [])
  return (
    <>
      <div className="weather-container">
        <FontAwesomeIcon icon={faCloud} color="white" size="4x" />
        <div className="weather">
          <h2 data-testid="weather-status">{weather?.status}</h2>
          <div className="weather-info">
            <FontAwesomeIcon icon={faTemperatureHalf} color="white" />{" "}
            {weather?.temp}&deg;C
            <FontAwesomeIcon icon={faDroplet} color="white" />{" "}
            {weather?.humidity}%
          </div>
        </div>
      </div>
      <div className="operation">
        <div className="operation-item">
          <div className="operation-item-header">PSI</div>
          <div className="psi">{weather?.psi}</div>
          <div className="operation-item-description">{weather?.psiStatus}</div>
        </div>
        <div className="operation-line" />
        <div className="operation-item">
          <div className="operation-item-header">RAIN</div>
          <div className="rain">{weather?.rain}</div>
          <div className="operation-item-description">mm</div>
        </div>
        <div className="operation-line" />
        <div className="operation-item">
          <div className="operation-item-header">DENGUE</div>
          <div className="dengue"></div>
          <div className="operation-item-description"></div>
        </div>
        <div className="operation-line" />
        <div className="operation-item">
          <div className="operation-item-header"></div>
          <div className="add">
            <FontAwesomeIcon icon={faCirclePlus} size="3x" />
          </div>
          <div
            className="operation-item-description"
            style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            Add
          </div>
        </div>
      </div>
    </>
  )
}
