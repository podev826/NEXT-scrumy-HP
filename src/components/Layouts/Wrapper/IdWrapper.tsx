import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type IdWrapperProps = BoxProps & {
  id: string;
  children: ReactNode;
};

export const IdWrapper: FC<IdWrapperProps> = ({ id, children, ...props }) => {
  return (
    <Box position="relative">
      <Box
        id={id}
        position="absolute"
        top={{ base: '-80px', md: '-104px', xl: '-123px' }}
      ></Box>
      <Box {...props}>{children}</Box>
    </Box>
  );
};
