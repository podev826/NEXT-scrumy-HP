import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { NEWS_PER_PAGE } from 'types';

import { PaginationNextButton } from './PaginationNextButton';
import { PaginationNumberButton } from './PaginationNumberButton';
import { PaginationPrevButton } from './PaginationPrevButton';

type PaginationProps = {
  totalCount: number;
  activePage: number;
  delta?: number;
  setActivePage: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  totalCount,
  activePage,
  setActivePage,
}) => {
  const lastPage = Math.ceil(totalCount / NEWS_PER_PAGE);

  return (
    <Box
      display={'flex'}
      justifyContent={{ base: 'space-between', md: 'center' }}
      alignItems={'center'}
      gap={12}
    >
      {activePage !== 1 ? (
        <PaginationPrevButton setActivePage={setActivePage} />
      ) : (
        <Box></Box>
      )}
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        gap={{ base: 7, xl: 12 }}
      >
        {activePage !== 1 ? (
          <PaginationNumberButton
            value={activePage - 1}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        ) : null}
        <PaginationNumberButton
          value={activePage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        {activePage !== lastPage ? (
          <PaginationNumberButton
            value={activePage + 1}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        ) : null}
      </Box>
      {activePage !== lastPage ? (
        <PaginationNextButton
          lastPage={lastPage}
          setActivePage={setActivePage}
        />
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};
