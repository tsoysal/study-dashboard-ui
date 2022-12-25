import React from "react";
import chartOrange from "./circle-orange.svg";
import chartBlue from "./circle-blue.svg";
import chartGreen from "./circle-green.svg";
let chart;

function StatusCard({ title, value, color }) {
  switch (title) {
    case "Soru":
      chart = chartOrange;
      break;
    case "Paragraf":
      chart = chartBlue;
      break;
    case "Problem":
      chart = chartGreen;
      break;
    default:
      chart = chartOrange;
      break;
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="card-header">{title}</h3>
        <span id="card-description">Toplam Çözülen Soru</span>
        <br />
        <span id="card-question-count"
          style={{
            color: color
          }}
        >
          {value}
        </span>
      </div>
      <div className="card-graph">
        <img
          src={chart}
          alt="process chart"
        />
      </div>
    </div>
  );
}

export default StatusCard;
