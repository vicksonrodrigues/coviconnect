import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export interface CountryData {
  country: string;
  lat: number;
  long: number;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
}

interface MapComponentProps {
  countriesData: CountryData[];
}

const MapComponent: React.FC<MapComponentProps> = ({ countriesData }) => {
  const [activeMarker, setActiveMarker] = useState<CountryData | null>(null);

  const handleMarkerClick = (country: CountryData) => {
    setActiveMarker(country);
  };
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2.4}
      style={{ height: "600px", width: "100%", borderRadius: "16px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countriesData.map((country, index) => (
        <Marker
          key={index}
          position={[country.lat, country.long]}
          eventHandlers={{ click: () => handleMarkerClick(country) }}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Cases: {country.cases}</p>
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
