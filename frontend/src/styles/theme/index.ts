import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import * as foundations from './foundations';
import * as globals from './globals/styles';

export const theme = extendTheme({
  ...globals,
  ...foundations,
  components: {
    ...components,
  },
});
