import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.100', // light gray background
        color: 'gray.800',
      },
    },
  },
});

export default customTheme;