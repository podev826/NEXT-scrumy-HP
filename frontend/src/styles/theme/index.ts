import { extendTheme } from '@chakra-ui/react';

import { colors } from './foundations';
import { styles } from './styles';

export const theme = extendTheme({
  styles,
  colors,
});
