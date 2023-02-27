import { Box } from '@chakra-ui/react';
import {
  CustomBlogsHits,
  CustomBlogsPagination,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { BlogCategory } from 'components/Elements/Algolia/CategoryBlog';
import { IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { ActiveCategory } from 'pages/blogs';
import React, { FC, useContext } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { BLOG_PER_PAGE } from 'types';

import { SearchModal } from './SearchModal';

export const BlogMain: FC = () => {
  const { activeCategory } = useContext(ActiveCategory);
  return (
    <IdWrapper id="blog">
      <Box as="section" py="4" bg="gray.100" mx="auto">
        <InstantSearch
          searchClient={searchClient}
          indexName="blog"
          routing={true}
        >
          <FadeInAnimation>
            <Configure hitsPerPage={BLOG_PER_PAGE} />
            <Box display={activeCategory === '' ? 'block' : 'none'}>
              <BlogCategory attribute="category" />
            </Box>
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
                w={{ base: '95vw', lg: '67vw', xl: '70vw' }}
                ml={{ base: '', lg: 4 }}
                mt="4"
                mx="auto"
              >
                <Box display={activeCategory === '' ? 'none' : 'block'}>
                  <BlogCategory attribute="category" />
                </Box>
                <Box
                  pl={{ base: 1, lg: 0 }}
                  display={activeCategory === '' ? 'block' : 'none'}
                >
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
