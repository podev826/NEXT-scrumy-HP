import { Box, Center, Input, Spacer, Text } from '@chakra-ui/react';
import {
  CustomBlogsHits,
  CustomBlogsMenu,
  CustomPagination,
  FadeInAnimation,
  MagnifyingGlass,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  Configure,
  InstantSearch,
  SearchBoxProps,
  useSearchBox,
} from 'react-instantsearch-hooks-web';
import { BLOG_PER_PAGE } from 'types';

import { SearchModal } from './SearchModal';

export const BlogMain: FC = () => {
  return (
    <IdWrapper id="blog">
      <Box as="section" py={0} px={5} bg="gray.100" mx="0">
        <InstantSearch
          searchClient={searchClient}
          indexName="blog"
          routing={true}
        >
          <FadeInAnimation>
            <Box
              display={{ base: 'block', xl: 'flex' }}
              flexDirection={{ base: 'column', xl: 'row-reverse' }}
              alignItems={'baseline'}
            >
              <Box
                display={{ base: 'none', xl: 'block' }}
                justifyContent={'flex-start'}
                position="sticky"
                top="40"
                mx="auto"
                pb="10"
              >
                <SearchModal />
              </Box>
              <Box bg="white" p="7" w={{ base: '95vw', xl: '67vw' }} mx="auto">
                <PrimaryTitle en="Articles" />
                <Box pt={{ base: 6, xl: 0 }} mx="auto">
                  <CustomBlogsHits />
                  <Box mt={{ base: 16, xl: 20 }}>
                    <CustomPagination />
                  </Box>
                </Box>
              </Box>
            </Box>
          </FadeInAnimation>
        </InstantSearch>
      </Box>
    </IdWrapper>
  );
};
