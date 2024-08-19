import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_BASE_URL_FLIGHTS;
const BASE_URL_FLIGHTS = import.meta.env.VITE_BASE_URL_FLIGHTS;
const BASE_URL_AIRLINES = import.meta.env.VITE_BASE_URL_AIRLINES;

export const fetchFlights = async () => {
  try {
    const response = await axios.get(BASE_URL_FLIGHTS, {
      params: { access_key: VITE_API_KEY },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    return [];
  }
};

export const fetchAirlines = async () => {
  try {
    const response = await axios.get(BASE_URL_AIRLINES, {
      params: { access_key: VITE_API_KEY },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching airline data:", error);
    return [];
  }
};