import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import geodata from "../utils/geodata.json";
import Legend from "./Legend";

const getColor = (value) => {
  const minValue = Math.min(...geodata.map((d) => d.data));
  const maxValue = Math.max(...geodata.map((d) => d.data));
  const percentage = (value - minValue) / (maxValue - minValue);
  return `rgb(${Math.round(220 - 220 * percentage)}, ${Math.round(
    220 - 170 * percentage
  )}, 255)`;
};

const getRadius = (value) => {
  const minValue = Math.min(...geodata.map((d) => d.data));
  const maxValue = Math.max(...geodata.map((d) => d.data));
  const percentage = (value - minValue) / (maxValue - minValue);
  return 10 + percentage * 30;
};

const MapComponent = () => {
  const bounds = [
    [-85, -180],
    [85, 180],
  ];
  const [mapSize, setMapSize] = useState({ width: 1000, height: 500 });

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="map-container"
        style={{ height: "500px" }}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        minZoom={2}
        maxZoom={8}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geodata.map((data) => (
          <CircleMarker
            key={data.id}
            center={data.coordinates}
            radius={getRadius(data.data)}
            color={getColor(data.data)}
            fillColor={getColor(data.data)}
            fillOpacity={0.3}
            weight={1}
          >
            <Tooltip>
              {data.region}: {data.data}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
      <Legend />
    </div>
  );
};

export default MapComponent;
