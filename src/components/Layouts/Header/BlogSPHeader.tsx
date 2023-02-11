import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { BaseImage, BaseLink, FadeInAnimation } from 'components/Elements';
import { FC } from 'react';

import { BlogHeaderModal } from './BlogHeaderModal';
import { SearchModalSp } from './SearchModal';

export const BlogSPHeader: FC = () => {
  return (
    <FadeInAnimation>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex="sticky"
      >
        <Box
          px={{ base: 6, md: 10, lg: 16, xl: 24 }}
          mx="auto"
          bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
        >
          <Flex
            color="sub.100"
            px={{ base: 7, md: 10, xl: 14 }}
            py={{ base: 2, md: 3, xl: '14px' }}
            alignItems="center"
          >
            <BlogHeaderModal />
            <Spacer />
            <Text
              as="h1"
              fontSize={{ base: '4vw', md: '3vw', '2xl': '9xl' }}
              fontStyle="italic"
              lang="en"
              color={'white'}
            >
              Scrumy Media
            </Text>
            <Spacer />
            <Flex alignItems="center" gap={14}>
              <SearchModalSp />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </FadeInAnimation>
  );
};
