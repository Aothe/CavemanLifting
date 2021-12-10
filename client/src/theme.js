import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Ubuntu',
  },
  colors: {
    brand: {
      100: '#eee',
    },
  },
});

export default theme;
