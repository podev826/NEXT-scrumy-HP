import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

import { AngleRightIcon } from '../Icon';

export const PaginationNextButton: FC = () => {
  return (
    <Box
      fontSize={{ base: 'lg', xl: '2xl' }}
      display="grid"
      alignItems={'center'}
      justifyContent="center"
    >
      <Box
        as="button"
        display={'flex'}
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        transitionDuration="fast"
        _hover={{ opacity: 0.7 }}
      >
        <AngleRightIcon />
        <AngleRightIcon />
      </Box>
    </Box>
  );
};
