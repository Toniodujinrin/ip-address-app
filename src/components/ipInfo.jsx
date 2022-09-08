import React from "react";

const Info = (props) => {
  return (
    <div id="info">
      <ul id="info-list">
        <li className="info-item">
          <li>IP ADDRESS</li>
          <li></li>
        </li>
        <li className="info-item">
          <li>LOCATION</li>
          <li></li>
        </li>
        <li className="info-item">
          <li>TIMEZONE</li>
          <li></li>
        </li>
        <li className="info-item">
          <li>ISP</li>
          <li></li>
        </li>
      </ul>
    </div>
  );
};

export default Info;
