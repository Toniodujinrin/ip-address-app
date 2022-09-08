import React from "react";

const Info = ({ data }) => {
  return (
    <div id="info">
      <ul id="info-list">
        <li className="info-item">
          <div className="header">IP ADDRESS</div>
          <div>{Object.keys(data).length ? data.ip : ""}</div>
        </li>
        <li className="info-item">
          <div className="header">LOCATION</div>
          <div>
            {Object.keys(data).length
              ? `${data.location.city},${data.location.region},${data.location.postalCode}`
              : ""}
          </div>
        </li>
        <li className="info-item">
          <div className="header">TIMEZONE</div>
          <div>
            {Object.keys(data).length ? `UTC ${data.location.timezone}` : ""}
          </div>
        </li>
        <li className="info-item" id="last-item">
          <div className="header">ISP</div>
          <div>{Object.keys(data).length ? data.isp : ""}</div>
        </li>
      </ul>
    </div>
  );
};

export default Info;
