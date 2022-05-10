import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="\#">
            <FontAwesomeIcon icon={faBars} data-testid="burger" color="white" />
          </a>
        </li>
        <li>
          <div className="middle-header">
            <h3>myENV</h3>
            <a href="\#" className="location">
              Current location{" "}
              <FontAwesomeIcon icon={faAngleDown} color="white" />
            </a>
          </div>
        </li>
        <li>
          <a href="\#">
            <FontAwesomeIcon icon={faBell} color="white" />
          </a>
        </li>
      </ul>
    </div>
  )
}
