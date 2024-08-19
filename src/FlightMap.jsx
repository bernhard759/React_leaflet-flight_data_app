import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { fetchFlights } from "./services/flightService";
import { Box, Spinner, Text } from "@chakra-ui/react";
import AirlineSearch from "./AirlineSearch";
import airplaneIconUrl from "../public/black-plane.png";

function FlightMap() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAirlines, setSelectedAirlines] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      const flightData = await fetchFlights();
      const filteredFlights =
        selectedAirlines.length > 0
          ? flightData.filter((flight) =>
              selectedAirlines.some(
                (airline) => airline.iata_code === flight.airline.iata
              )
            )
          : flightData;
      setFlights(filteredFlights);
      setLoading(false);
    };
    getFlights();
  }, [selectedAirlines]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="400px"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  // Markup
  return (
    <Box height="600px" borderRadius="lg" overflow="hidden">
      {/* Airline search */}
      <AirlineSearch
        selectedAirlines={selectedAirlines}
        setSelectedAirlines={setSelectedAirlines}
      />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {flights.map((flight) => {
          // Create a custom Leaflet icon using the PNG
          const airplaneIcon = L.icon({
            iconUrl: airplaneIconUrl,
            iconSize: [32, 32], // Adjust size as needed
            iconAnchor: [16, 16], // Anchor the icon at its center
            popupAnchor: [0, -16], // Position popup above the icon
            // className: `custom-icon-${flight.flight.number}` // CSS class for custom styling
          });

          return (
            <Marker
              key={flight.flight.number}
              position={[flight.live.latitude, flight.live.longitude]}
              icon={airplaneIcon}
            >
              <Popup>
                <Text fontWeight="bold">
                  {flight.airline.name} Flight {flight.flight.number}
                </Text>
                <Text>Altitude: {flight.live.altitude} ft</Text>
                <Text>Speed: {flight.live.speed_horizontal} km/h</Text>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
}

export default FlightMap;
