import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AirlineSearch from "./AirlineSearch";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

vi.mock("./services/flightService", () => ({
  fetchAirlines: vi.fn().mockResolvedValue([
    { airline_name: "American Airlines", iata_code: "AA" },
    { airline_name: "Delta Air Lines", iata_code: "DL" },
  ]),
}));

// Airline search test
describe("AirlineSearch", () => {
  let setSelectedAirlines;

  // BeforeEach
  beforeEach(() => {
    setSelectedAirlines = vi.fn();
    // Render
    render(
      <AirlineSearch
        selectedAirlines={[]}
        setSelectedAirlines={setSelectedAirlines}
      />
    );
  });

  // AfterEach
  afterEach(() => {
    vi.clearAllMocks();
  });

  // Test
  it("should render input and match airline suggestions based on search term", async () => {
    const input = screen.getAllByPlaceholderText("Search for airlines...")[0];
    fireEvent.change(input, { target: { value: "Am" } });

    const suggestion = await screen.findByText("American Airlines (AA)");
    expect(suggestion).toBeInTheDocument();
  });

  // Test
  it("should remove an airline when clicking the close button on the badge", async () => {
    // Mock the selected airlines with Delta Air Lines
    render(
      <AirlineSearch
        selectedAirlines={[{ airline_name: "Delta Air Lines", iata_code: "DL" }]}
        setSelectedAirlines={setSelectedAirlines}
      />
    );

    const badge = await screen.findByTestId("selectionDL");
    expect(badge).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(setSelectedAirlines).toHaveBeenCalledWith([]);
  });
});
