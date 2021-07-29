import React, { useState, useMemo } from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
export default function Markers(props) {
  //===Set the initial count state to zero, 0====
  const [clickedCount, setClickedCount] = useState(0);
  //===Create handleIncrement event handler===
  const eventHandlers = useMemo(
    () => ({
      click() {
        setClickedCount((count) => count + 1);
      },
    }),
    []
  );
  return (
    <>
      {props.hospitals.map((item) => {
        return (
          <Marker
            eventHandlers={eventHandlers}
            key={item.id}
            position={item.coordinates}
          >
            <Tooltip>{item.name}</Tooltip>
            <Popup>You clicked marker: {clickedCount}</Popup>
          </Marker>
        );
      })}
    </>
  );
}
