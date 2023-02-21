import { Box } from '@chakra-ui/react';
import {
  CustomBlogsHits,
  CustomBlogsPagination,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { FC } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { BLOG_PER_PAGE } from 'types';

import { SearchModal } from './SearchModal';

export const BlogMain: FC = () => {
  return (
    <IdWrapper id="blog">
      <Box as="section" py={0} pr={5} bg="gray.100" mx="0">
        <InstantSearch
          searchClient={searchClient}
          indexName="blog"
          routing={true}
        >
          <FadeInAnimation>
            <Configure hitsPerPage={BLOG_PER_PAGE} />
            <Box
              display={{ base: 'block', lg: 'flex' }}
              flexDirection={{ base: 'column', lg: 'row-reverse' }}
              alignItems={'baseline'}
            >
              <Box
                display={{ base: 'none', lg: 'block' }}
                justifyContent={'flex-start'}
                position="sticky"
                top={{ base: '32', xl: '36' }}
                mx="auto"
                pb="10"
              >
                <SearchModal />
              </Box>
              <Box
                bg="white"
                p={{ base: '3', lg: '4', xl: '7' }}
                w={{ base: '100vw', lg: '67vw', xl: '67vw' }}
                ml="0"
              >
                <Box pl={{base:5,lg:4,xl:1}}>
                  <PrimaryTitle en="Articles" />
                </Box>
                <Box pt={{ base: 6, xl: 0 }} mx="auto">
                  <CustomBlogsHits />
                  <Box mt={{ base: 16, xl: 20 }}>
                    <CustomBlogsPagination />
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
