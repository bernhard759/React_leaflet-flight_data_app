import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockFlights from "./mockFlights";
import mockAirlines from "./mockAirlines";

// Mock
const mock = new MockAdapter(axios);

export const setupMocks = () => {
  if (process.env.NODE_ENV === "development") {
    mock.onGet(import.meta.env.VITE_BASE_URL_FLIGHTS).reply(200, {
      data: mockFlights,
    });
    mock.onGet(import.meta.env.VITE_BASE_URL_AIRLINES).reply(200, {
      data: mockAirlines,
    });
  }
};
