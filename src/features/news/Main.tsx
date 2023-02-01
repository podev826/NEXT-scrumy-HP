import { Box, Text } from '@chakra-ui/react';
import {
  CustomHits,
  CustomMenu,
  CustomPagination,
  CustomSearchBox,
  FadeInAnimation,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { searchClient } from 'libraries/algolia';
import { FC } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import { NEWS_PER_PAGE } from 'types';

export const NewsMain: FC = () => {
  return (
    <IdWrapper id="news">
      <ContentWrapper as="section" maxW={'calc(1080px + (96px * 2))'}>
        <InstantSearch searchClient={searchClient} indexName="news">
          <FadeInAnimation>
            <Configure hitsPerPage={NEWS_PER_PAGE} />
            <Box
              pr={{ xl: 16 }}
              pb={{ base: 16, xl: 24 }}
              position="relative"
              display={'grid'}
              gap={{ base: 8, xl: 12 }}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'block',
                width: '100%',
                height: '1px',
                backgroundColor: 'sub.100',
                opacity: 0.24,
              }}
            >
              <Box display={{ xl: 'flex' }} alignItems="center">
                <Text
                  fontSize={{ base: 'xl', xl: '2xl' }}
                  fontWeight="bold"
                  flexBasis={{ xl: '264px' }}
                  pr={{ xl: 6 }}
                >
                  カテゴリから探す
                </Text>
                <CustomMenu attribute="category" />
              </Box>
              <Box display={{ xl: 'flex' }} alignItems="center">
                <Text
                  fontSize={{ base: 'xl', xl: '2xl' }}
                  fontWeight="bold"
                  flexBasis={{ xl: '264px' }}
                  pr={{ xl: 6 }}
                >
                  キーワードから探す
                </Text>
                <Box
                  flexBasis={{ xl: 'calc(100% - 264px)' }}
                  mt={{ base: 4, xl: 0 }}
                >
                  <CustomSearchBox />
                </Box>
              </Box>
            </Box>
          </FadeInAnimation>
          <FadeInAnimation>
            <Box pt={{ base: 6, xl: 16 }}>
              <CustomHits />
              <Box mt={{ base: 16, xl: 24 }}>
                <CustomPagination />
              </Box>
            </Box>
          </FadeInAnimation>
        </InstantSearch>
      </ContentWrapper>
    </IdWrapper>
  );
};
