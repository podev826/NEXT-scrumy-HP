import { Box, Image, Stack } from '@chakra-ui/react';
import { BaseLink, FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { BLOG_LIST } from 'configs';
import React, { FC } from 'react';

export const BlogCategory: FC = () => {
  return (
    <IdWrapper id="category">
      <ContentWrapper bg="white" py={{ base: 7, xl: 14 }}>
        <FadeInAnimation>
          <PrimaryTitle en="Categories" />

          <Box
            pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
            px={{ base: '6.4vw', sm: 0 }}
            justifyContent="center"
          >
            <Stack
              justifyContent="center"
              direction={{ base: 'column', lg: 'row' }}
              alignItems="center"
            >
              {BLOG_LIST.map((item) => (
                <Box
                  key={item.href}
                  w={{ base: '50vw', lg: '30vw' }}
                  pb={{ base: 3, lg: 0 }}
                >
                  <Box>
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
                      </Box>
                    </BaseLink>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
