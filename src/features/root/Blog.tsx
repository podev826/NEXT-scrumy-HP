import { Box, Image, Text } from '@chakra-ui/react';
import {
  BaseLink,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { BLOG_LIST } from 'configs';
import React, { FC } from 'react';

export const RootBlog: FC = () => {
  return (
    <IdWrapper id="media">
      <ContentWrapper bg="white" py={{ base: 7, xl: 14 }}>
        <FadeInAnimation>
          <PrimaryTitle en="Media" />
          <Box
            mt={8}
            overflowX={{ base: 'scroll', lg: 'visible' }}
            w={{ base: '100vw', lg: '100%' }}
            mr={{ base: 'calc(50% - 50vw)', lg: 0 }}
          >
            <Box
              display="grid"
              gap={{ base: 4, lg: 7 }}
              gridTemplateColumns="repeat(3, 1fr)"
            >
              {BLOG_LIST.map((item) => (
                <Box
                  key={item.href}
                  w={{ base: 'calc(264px + 12px)', lg: 'full' }}
                  pr={{ base: 3, lg: 0 }}
                  pb={{ base: 3, lg: 0 }}
                >
                  <Box
                    borderRadius={'32px'}
                    boxShadow={'lg'}
                    border="1px"
                    borderColor={'gray.100'}
                    transitionProperty="all"
                    transitionTimingFunction="linear"
                    transitionDuration="fast"
                    _hover={{
                      boxShadow: 'transparent',
                    }}
                    h={'full'}
                  >
                    <BaseLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      h="full"
                      _hover={{
                        opacity: 1,
                      }}
                    >
                      <Box px={6} py={{ base: 4, lg: 5 }}>
                        <Image
                          src={item.image}
                          width="100%"
                          height="100%"
                          boxShadow={'lg'}
                          borderRadius="10px"
                          alt=""
                        />
                        <Text
                          textTransform={'uppercase'}
                          lang="en"
                          fontWeight={'bold'}
                          fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                          lineHeight={1}
                          mt={{ base: 3, lg: 6 }}
                          color="base.100"
                          bg="sub.100"
                          display={'inline-block'}
                          py={{ base: '2px', lg: 1 }}
                          px={{ base: 1, lg: 2 }}
                        >
                          CATEGORY
                        </Text>
                        <Text fontWeight={'bold'} mt={{ base: 3 }}>
                          {item.title}
                        </Text>
                      </Box>
                    </BaseLink>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            maxW={{ base: '280px', xl: '364px' }}
            mx={'auto'}
            mt={{ base: 10, xl: 10 }}
          >
            <PrimaryLink
              href="https://blog-scrumy.com/"
              variant={'primary'}
              w="full"
            >
              詳しく見る
            </PrimaryLink>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
