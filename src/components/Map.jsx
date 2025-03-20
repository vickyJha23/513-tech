import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

import "leaflet/dist/leaflet.css"; 

const Map = () => {
  return (
    <div style={{ height: "500px", width: "100%", marginTop: "20px", border: "2px solid red" } 

    }>
    <MapContainer center={[19.6980587,72.7751741]} zoom={13} style={{ height: "100%", width: "100%", outline: "none" }} scrollWheelZoom={false} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[19.6980587,72.775174]}>
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  </div>
  )
};

export default Map;
