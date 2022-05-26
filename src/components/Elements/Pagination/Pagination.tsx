import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { PaginationNextButton } from './PaginationNextButton';
import { PaginationNumberButton } from './PaginationNumberButton';
import { PaginationPrevButton } from './PaginationPrevButton';

export const Pagination: FC = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={{ base: 'space-between', md: 'center' }}
      alignItems={'center'}
      gap={12}
    >
      <PaginationPrevButton />
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        gap={{ base: 7, xl: 12 }}
      >
        <PaginationNumberButton active={true}>1</PaginationNumberButton>
        <PaginationNumberButton>2</PaginationNumberButton>
        <PaginationNumberButton>3</PaginationNumberButton>
      </Box>
      <PaginationNextButton />
    </Box>
  );
};
