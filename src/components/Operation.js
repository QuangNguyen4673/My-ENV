import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function Operation() {
  return (
    <div className="operation">
      <div className="operation-item">
        <div className="operation-item-header">PSI</div>
        <div className="psi">23</div>
        <div className="operation-item-description">Good</div>
      </div>
      <div className="operation-item">
        <div className="operation-item-header">RAIN</div>

        <div className="rain">0</div>
        <div className="operation-item-description">mm</div>
      </div>
      <div className="operation-item">
        <div className="operation-item-header">DENGUE</div>
        <div className="dengue"></div>
        <div className="operation-item-description"></div>
      </div>
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
  );
}
