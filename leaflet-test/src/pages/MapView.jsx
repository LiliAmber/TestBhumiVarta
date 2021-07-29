import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "../components/Markers";
import hospitalData from "../data.json";

export default function MapView() {
  return (
    <>
      <MapContainer center={[-6.17511, 106.865036]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers hospitals={hospitalData.hospitals}></Markers>
      </MapContainer>
    </>
  );
}
