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
      <ContentWrapper as="section" py={0} px={8}>
        <InstantSearch
          searchClient={searchClient}
          indexName="blog"
          // initialUiState={{
          //   indexName: {
          //     query: 'a',
          //     page: 5,
          //   },
          // }}
          routing={true}
        >
          <FadeInAnimation>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column', xl: 'row-reverse' }}
              justifyContent={'flex-end'}
              gap={30}
              alignItems={'baseline'}
              mb={10}
            >
              <Box
                display={{ base: 'none', xl: 'block' }}
                justifyContent={'flex-start'}
                position="sticky"
                top="40"
              >
                <SearchModal />
              </Box>
              <Spacer />
              <Box>
                <PrimaryTitle en="Articles" />
                <Box pt={{ base: 6, xl: 0 }} w={{ base: '', xl: '60vw' }}>
                  <CustomBlogsHits />
                  <Box mt={{ base: 16, xl: 20 }} mb={10}>
                    <CustomPagination />
                  </Box>
                </Box>
              </Box>
            </Box>
          </FadeInAnimation>
        </InstantSearch>
      </ContentWrapper>
    </IdWrapper>
  );
};
