import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type IdWrapperProps = {
  id: string;
  children: ReactNode;
};

export const IdWrapper: FC<IdWrapperProps> = ({ id, children }) => {
  return (
    <Box position="relative">
      <Box
        id={id}
        position="absolute"
        top={{ base: '-80px', md: '-104px', xl: '-123px' }}
      ></Box>
      <Box>{children}</Box>
    </Box>
  );
};
