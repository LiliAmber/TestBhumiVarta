import React from "react";
import { Marker, Popup } from "react-leaflet";
export default function Markers(props) {
  return (
    <>
      {props.hospitals.map((item) => {
        return (
          <Marker key={item.id} position={item.coordinates}>
            <Popup>You clicked marker: {item.name}</Popup>
          </Marker>
        );
      })}
    </>
  );
}
