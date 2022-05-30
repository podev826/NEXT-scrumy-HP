import { ChakraProvider } from '@chakra-ui/react';
import { HeaderProvider } from 'contexts/HeaderProvider';
import type { AppProps } from 'next/app';
import { theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </ChakraProvider>
  );
};

export default App;
