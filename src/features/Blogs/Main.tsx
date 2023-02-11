import { Box, Text } from '@chakra-ui/react';
import {
  CustomBlogsHits,
  CustomBlogsMenu,
  CustomPagination,
  CustomSearchBox,
  FadeInAnimation,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { FC } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { BLOG_PER_PAGE } from 'types';

export const BlogMain: FC = () => {
  return (
    <IdWrapper id="blog">
      <ContentWrapper as="section" py={0} px={8}>
        <InstantSearch searchClient={searchClient} indexName="blog">
          <FadeInAnimation>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column', xl: 'row-reverse' }}
              justifyContent={{ base: '', xl: 'space-between' }}
            >
              <Box mx={'auto'}>
                <Configure hitsPerPage={BLOG_PER_PAGE} />
                <Box
                  pb={{ base: 16, xl: 0 }}
                  pr={{ base: 0, xl: 5 }}
                  w={{ base: '70vw', xl: 370 }}
                  alignItems={'center'}
                >
                  <Box
                    display={{ base: 'none', xl: 'block' }}
                    textAlign={'center'}
                  >
                    <Text
                      fontSize={{ base: 'xl', xl: '2xl' }}
                      fontWeight="bold"
                      flexBasis={{ xl: '264px' }}
                      pr={{ xl: 0 }}
                    >
                      キーワードから探す
                    </Text>
                    <Box mt={{ base: 4, xl: 4 }}>
                      <CustomSearchBox />
                    </Box>
                  </Box>
                  <Box display={{ base: 'none', xl: 'block' }}>
                    <Text
                      fontSize={{ base: 'xl', xl: '2xl' }}
                      fontWeight="bold"
                      textAlign={'center'}
                      pr={{ xl: 0 }}
                      mt={{ base: 7, xl: 10 }}
                    >
                      カテゴリから探す
                    </Text>
                    <CustomBlogsMenu attribute="category" />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box pt={{ base: 6, xl: 0 }}>
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
