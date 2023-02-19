import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PaginationProps, usePagination } from 'react-instantsearch-hooks-web';

import { AngleLeftIcon, AngleRightIcon } from '../Icon';

export const CustomBlogsPagination = (props: PaginationProps) => {
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
      <Box
        fontSize={{ base: 'lg', xl: '2xl' }}
        display="grid"
        alignItems={'center'}
        justifyContent="center"
      >
        {!isFirstPage ? (
          <Box
            as="button"
            onClick={() => {
              router.push(`${path}#blog`);
              refine(0);
            }}
            display={'flex'}
            transitionProperty="all"
            transitionTimingFunction="linear"
            transitionDuration="fast"
            _hover={{ opacity: 0.7 }}
          >
            <AngleLeftIcon />
            <AngleLeftIcon />
          </Box>
        ) : null}
      </Box>
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
              router.push(`${path}#blog`);
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
            transitionTimingFunction="linear"
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
          transitionTimingFunction="linear"
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
              router.push(`${path}#blog`);
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
            transitionTimingFunction="linear"
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
      <Box
        fontSize={{ base: 'lg', xl: '2xl' }}
        display="grid"
        alignItems={'center'}
        justifyContent="center"
      >
        {!isLastPage ? (
          <Box
            as="button"
            onClick={() => {
              router.push(`${path}#blog`);
              refine(nbPages - 1);
            }}
            display={'flex'}
            transitionProperty="all"
            transitionTimingFunction="linear"
            transitionDuration="fast"
            _hover={{ opacity: 0.7 }}
          >
            <AngleRightIcon />
            <AngleRightIcon />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
