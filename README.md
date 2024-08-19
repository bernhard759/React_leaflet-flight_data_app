# Flight Data App

## Overview

The **Flight Data App** is a React-based web application that allows users to visualize real-time flight data on an interactive map. The app integrates with the AviationStack API to fetch live flight information, including details like altitude, speed, and airline. Users can search for specific airlines, view flights on a map with custom icons, and filter the displayed flights based on selected airlines. The app also uses Chakra UI for a sleek and responsive user interface.

## Features

- **Interactive Map Visualization:** Display live flights on a world map using Leaflet, with custom icons for aircraft.
- **Airline Search and Filter:** Search for airlines and filter the displayed flights by selecting or deselecting airlines.
- **Real-Time Flight Data:** Fetch and display live data, including flight altitude, speed, and location, from the AviationStack API.
- **Responsive Design:** Built with Chakra UI to ensure the app is mobile-friendly and looks great on all devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Leaflet**: Library for interactive maps.
- **Chakra UI**: UI components for React, providing a modern and responsive design.
- **Axios**: Promise-based HTTP client for API requests.
- **Vitest**: A fast and lightweight testing framework for ensuring the app functions correctly.
- **AviationStack API**: Provides real-time flight data.

## Installation

1. **Clone the repository**:

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root of the project.
   - Add your API key and base URLs:
     ```bash
     VITE_API_KEY=your_api_key_here
     VITE_BASE_URL_FLIGHTS=https://api.aviationstack.com/v1/flights
     VITE_BASE_URL_AIRLINES=https://api.aviationstack.com/v1/airlines
     ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

5. **Run tests**:
   ```bash
   npm run test
   ```

## Usage

- **Search Airlines**: Use the search bar to find airlines. Matching suggestions will appear as you type.
- **Select Airlines**: Click on a suggestion to filter flights for that airline. Selected airlines appear as badges below the search bar.
- **View Flights**: The map updates to show flights for the selected airlines, represented by custom icons.
- **Remove Airlines**: Click the 'x' on a badge to remove it and update the flight display.