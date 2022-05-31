import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { AngleLeftIcon } from '../Icon';

type PaginationPrevButtonProps = {
  setActivePage: (value: number) => void;
};

export const PaginationPrevButton: FC<PaginationPrevButtonProps> = ({
  setActivePage,
}) => {
  const router = useRouter();
  const path = router.asPath.substring(0, router.asPath.indexOf('#'));

  return (
    <Box
      fontSize={{ base: 'lg', xl: '2xl' }}
      display="grid"
      alignItems={'center'}
      justifyContent="center"
    >
      <Box
        as="button"
        onClick={() => {
          setActivePage(1);
          router.push(`${path}#news`);
        }}
        display={'flex'}
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        transitionDuration="fast"
        _hover={{ opacity: 0.7 }}
      >
        <AngleLeftIcon />
        <AngleLeftIcon />
      </Box>
    </Box>
  );
};
