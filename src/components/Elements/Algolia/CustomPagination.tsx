import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { usePagination } from 'react-instantsearch-hooks-web';

import { AngleLeftIcon, AngleRightIcon } from '../Icon';

export const CustomPagination = (props: any) => {
  const { currentRefinement, nbPages, isFirstPage, isLastPage, refine } =
    usePagination(props);

  const router = useRouter();
  const path = router.asPath.substring(0, router.asPath.indexOf('#'));

  return (
    <Box
      display={'flex'}
      justifyContent={{ base: 'space-between', md: 'center' }}
      alignItems={'center'}
      gap={12}
    >
      {!isFirstPage ? (
        <Box
          fontSize={{ base: 'lg', xl: '2xl' }}
          display="grid"
          alignItems={'center'}
          justifyContent="center"
        >
          <Box
            as="button"
            onClick={() => {
              router.push(`${path}#news`);
              refine(0);
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
      ) : (
        <Box></Box>
      )}
      <Box
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        gap={{ base: 7, xl: 12 }}
      >
        {!isFirstPage ? (
          <Box
            as="button"
            type="button"
            onClick={() => {
              router.push(`${path}#news`);
              refine(currentRefinement - 1);
            }}
            w={{ base: 12, xl: 14 }}
            h={{ base: 12, xl: 14 }}
            fontSize={{ base: 'xl', xl: '2xl' }}
            fontWeight={'bold'}
            display="grid"
            alignItems={'center'}
            justifyContent="center"
            color={'sub.100'}
            bg={'base.100'}
            borderStyle="solid"
            borderWidth={{ base: '2px', xl: '4px' }}
            borderColor="sub.100"
            cursor={'pointer'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
            lang="en"
          >
            {currentRefinement}
          </Box>
        ) : null}
        <Box
          as="p"
          w={{ base: 12, xl: 14 }}
          h={{ base: 12, xl: 14 }}
          fontSize={{ base: 'xl', xl: '2xl' }}
          fontWeight={'bold'}
          display="grid"
          alignItems={'center'}
          justifyContent="center"
          color={'base.100'}
          bg={'sub.100'}
          borderStyle="solid"
          borderWidth={{ base: '2px', xl: '4px' }}
          borderColor="sub.100"
          borderRadius="full"
          transitionProperty="all"
          transitionTimingFunction="ease-out"
          transitionDuration="fast"
          lang="en"
        >
          {currentRefinement + 1}
        </Box>
        {!isLastPage ? (
          <Box
            as="button"
            type="button"
            onClick={() => {
              router.push(`${path}#news`);
              refine(currentRefinement + 1);
            }}
            w={{ base: 12, xl: 14 }}
            h={{ base: 12, xl: 14 }}
            fontSize={{ base: 'xl', xl: '2xl' }}
            fontWeight={'bold'}
            display="grid"
            alignItems={'center'}
            justifyContent="center"
            color={'sub.100'}
            bg={'base.100'}
            borderStyle="solid"
            borderWidth={{ base: '2px', xl: '4px' }}
            borderColor="sub.100"
            cursor={'pointer'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
            lang="en"
          >
            {currentRefinement + 2}
          </Box>
        ) : null}
      </Box>
      {!isLastPage ? (
        <Box
          fontSize={{ base: 'lg', xl: '2xl' }}
          display="grid"
          alignItems={'center'}
          justifyContent="center"
        >
          <Box
            as="button"
            onClick={() => {
              router.push(`${path}#news`);
              refine(nbPages - 1);
            }}
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
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};
