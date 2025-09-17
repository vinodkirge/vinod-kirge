import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import Layout from "../components/Layout";

const reports = [
  {
    id: 1,
    position: [40.7128, -74.006], // latitude, longitude (example NYC coords)
    description: "Pothole near main intersection",
  },
  {
    id: 2,
    position: [40.7158, -74.002],
    description: "Streetlight not working",
  },
  {
    id: 3,
    position: [40.7108, -74.009],
    description: "dumping issue",
  },
   {
    id: 4,
    position: [40.7198, -74.020],
    description: "Overflowing garbage bin",
  },
   {
    id: 5,
    position: [40.7168, -74.020],
    description: "garbage problem",
  },
];

const MapWithIssues = () => {
  return (
    <Layout>
    <MapContainer
      center={[40.7128, -74.006]} // center on your city
      zoom={14}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map(({ id, position, description }) => (
        <CircleMarker
          key={id}
          center={position}
          radius={8}
          color="red"
          fillColor="red"
          fillOpacity={0.8}
          stroke={false}
        >
          <Popup>{description}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
    </Layout>
  );
};

export default MapWithIssues;
