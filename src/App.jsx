import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';
import FlightMap from './FlightMap';

function App() {
  return (
    <Box maxW="container.md" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="white">
      <Heading as="h1" size="xl" textAlign="center" mb={5}>
        Live Flight Tracker
      </Heading>
      <Center mb={5}>
        <Text fontSize="lg" color="gray.600">
          View real-time flight positions on the map
        </Text>
      </Center>
      <FlightMap />
    </Box>
  );
}

export default App;
