//import { MapContainer, TileLayer, useMap } from "react-leaflet";
import React from "react";
import {
  interaction,
  layer,
  custom,
  constrol,
  Interactions,
  Overlays,
  Controls,
  Map,
  Layers,
  Overlay,
  Util,
} from "react-openlayers";

const Maps = () => {
  const center = [51.505, -0.09];
  const mapTiler = {
    url: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xCEBR3GbMEjDHJU0nyJV",
    attribution:
      "&copy; <a href=https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xCEBR3GbMEjDHJU0nyJV></a> contributors",
  };
  return (
    <Map view={{ center: [0, 0], zoom: 2 }}>
      <Layers>
        <layer.Tile></layer.Tile>
      </Layers>
    </Map>
  );
};

export default Maps;
