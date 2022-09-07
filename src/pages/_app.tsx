import { ChakraProvider } from '@chakra-ui/react';
import {
  existsGaIdPrimary,
  existsGaIdSecondary,
  GA_ID_PRIMARY,
  GA_ID_SECONDARY,
} from 'configs/Common/GoogleAnalytics';
import { HeaderProvider } from 'contexts/HeaderProvider';
import { usePageView } from 'hooks/usePageView';
import type { AppProps } from 'next/app';
import { theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  usePageView({ existsGaIdPrimary, GA_ID_PRIMARY });
  usePageView({ existsGaIdSecondary, GA_ID_SECONDARY });
  return (
    <ChakraProvider theme={theme}>
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </ChakraProvider>
  );
};

export default App;
