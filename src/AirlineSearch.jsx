import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Input, Badge, Flex, CloseButton, VStack } from "@chakra-ui/react";
import { fetchAirlines } from "./services/flightService";

function AirlineSearch({ selectedAirlines, setSelectedAirlines }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //Effect
  useEffect(() => {
    const fetchAirlineSuggestions = async () => {
      if (searchTerm.length > 1) {
        const airlineData = await fetchAirlines();
        console.log(airlineData);

        // Filter airlines to match the search term
        const filteredAirlines = airlineData.filter(
          (airline) =>
            airline.airline_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            airline.iata_code.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSuggestions(filteredAirlines);
      } else {
        setSuggestions([]);
      }
    };

    fetchAirlineSuggestions();
  }, [searchTerm]);

  // Handle airline select
  const handleSelectAirline = (airline) => {
    if (!selectedAirlines.includes(airline)) {
      setSelectedAirlines([...selectedAirlines, airline]);
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  // Handle airline remove
  const handleRemoveAirline = (airline) => {
    setSelectedAirlines(
      selectedAirlines.filter((a) => a.iata_code !== airline.iata_code)
    );
  };

  // Markup
  return (
    <Box>
        {/* Input */}
      <Input
        placeholder="Search for airlines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <VStack spacing={2} mt={2} alignItems="flex-start">
            {/* Suggested airlines boxes */}
          {suggestions.map((airline) => (
            <Box
              key={airline.iata_code}
              bg="gray.100"
              p={2}
              borderRadius="md"
              cursor="pointer"
              data-testid={"suggestion"+airline.iata_code}
              onClick={() => handleSelectAirline(airline)}
            >
              {airline.airline_name} ({airline.iata_code})
            </Box>
          ))}
        </VStack>
      )}
      <Flex mt={4} flexWrap="wrap">
        {/* Selected airlines badges */}
        {selectedAirlines.map((airline) => (
          <Badge
            key={airline.iata_code}
            mr={2}
            mb={2}
            colorScheme="teal"
            p={2}
            borderRadius="md"
            data-testid={"selection"+airline.iata_code}
          >
            {airline.airline_name} ({airline.iata_code})
            <CloseButton
              size="sm"
              ml={2}
              onClick={() => handleRemoveAirline(airline)}
            />
          </Badge>
        ))}
      </Flex>
    </Box>
  );
}

export default AirlineSearch;
