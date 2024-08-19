import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import customTheme from './theme';
import { setupMocks } from './services/mockApi';

if (process.env.NODE_ENV === 'development') {
  setupMocks();  // Setup mock API responses during development
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
