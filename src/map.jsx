import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import React, { useRef } from "react";
import { Location } from "./icons";

import "leaflet/dist/leaflet.css";
const makeIcon = new L.Icon({
  iconUrl: require("./images/icons8-location-50.png"),
  iconSize: [35, 35],
});

const Maps = ({ data }) => {
  let location = [];
  if (Object.keys(data) > 1) {
    const long = data.location.lng;
    const lat = data.location.lat;
    location = [37.38605, -122.08385];
  }

  const mapRef = useRef();
  const mapData = {};
  mapData.url =
    "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xCEBR3GbMEjDHJU0nyJV";
  return (
    <MapContainer
      style={{ height: "100%", width: "100vw" }}
      zoom={0}
      center={[51.505, -0.09]}
      ref={mapRef}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={makeIcon}
        position={
          data.location
            ? [data.location.lat, data.location.lng]
            : [51.505, -0.09]
        }
        //location.length === 0 ? [51.505, -0.09] : location
      />
    </MapContainer>
  );
};

export default Maps;
