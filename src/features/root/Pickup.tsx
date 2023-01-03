import { Box, Text } from '@chakra-ui/react';
import {
  BaseImage,
  BaseLink,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import React, { FC } from 'react';
import { PickupContentProps } from 'types';

type RootPickupProps = {
  contents: PickupContentProps[];
};

export const RootPickup: FC<RootPickupProps> = ({ contents }) => {
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
              {contents.map((item) => (
                <Box
                  key={item.href}
                  w={{ base: 'calc(264px + 12px)', lg: 'full' }}
                  pr={{ base: 3, lg: 0 }}
                  pb={{ base: 3, lg: 0 }}
                >
                  <Box
                    bg="base.100"
                    borderRadius={'32px'}
                    boxShadow={'secondary'}
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
                      <Box px={8} py={{ base: 7, lg: 10 }}>
                        <BaseImage
                          src={item.image.url}
                          width={item.image.width}
                          height={item.image.height}
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
                          Topics
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
          <Text
            maxW={{ base: '280px', xl: '364px' }}
            mx={{ base: 'auto', xl: 0 }}
            mt={{ base: 5, xl: 7 }}
          >
            <PrimaryLink href="/contact" variant={'primary'} w="full">
              詳しく見る
            </PrimaryLink>
          </Text>  
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
