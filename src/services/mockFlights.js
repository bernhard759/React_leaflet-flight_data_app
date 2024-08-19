const mockFlights = [
    {
      flight_date: "2019-12-12",
      flight_status: "active",
      departure: {
        airport: "San Francisco International",
        iata: "SFO",
        icao: "KSFO",
      },
      arrival: {
        airport: "Dallas/Fort Worth International",
        iata: "DFW",
        icao: "KDFW",
      },
      airline: {
        name: "American Airlines",
        iata: "AA",
        icao: "AAL",
      },
      flight: {
        number: "1004",
        iata: "AA1004",
        icao: "AAL1004",
      },
      aircraft: {
        registration: "N160AN",
        iata: "A321",
        icao: "A321",
      },
      live: {
        updated: "2019-12-12T10:00:00+00:00",
        latitude: 36.2856,
        longitude: -106.807,
        altitude: 8846.82,
        direction: 114.34,
        speed_horizontal: 894.348,
        speed_vertical: 1.188,
        is_ground: false,
      },
    },
    {
      flight_date: "2019-12-12",
      flight_status: "active",
      departure: {
        airport: "Los Angeles International",
        iata: "LAX",
        icao: "KLAX",
      },
      arrival: {
        airport: "John F. Kennedy International",
        iata: "JFK",
        icao: "KJFK",
      },
      airline: {
        name: "Delta Air Lines",
        iata: "DL",
        icao: "DAL",
      },
      flight: {
        number: "405",
        iata: "DL405",
        icao: "DAL405",
      },
      aircraft: {
        registration: "N526DL",
        iata: "B738",
        icao: "B738",
      },
      live: {
        updated: "2019-12-12T10:05:00+00:00",
        latitude: 40.7128,
        longitude: -74.0060,
        altitude: 9000,
        direction: 75.0,
        speed_horizontal: 870.0,
        speed_vertical: 1.0,
        is_ground: false,
      },
    },
  ];
  
  export default mockFlights;