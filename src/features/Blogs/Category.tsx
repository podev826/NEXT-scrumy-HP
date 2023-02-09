import { Box, Image, Stack } from '@chakra-ui/react';
import { BaseLink, FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { BLOG_LIST } from 'configs';
import React, { FC } from 'react';

export const BlogCategory: FC = () => {
  return (
    <IdWrapper id="category">
      <ContentWrapper py={{ base: 7, xl: 14 }} px={5}>
        <FadeInAnimation>
          <PrimaryTitle en="Categories" />

          <Box
            pt={3}
            pb={{ base: '1.8vw', xl: '2.222vw' }}
            px={{ base: '6.4vw', sm: 0 }}
            justifyContent="center"
          >
            <Stack
              justifyContent="center"
              direction={'row'}
              flexWrap={'wrap'}
              alignItems="center"
            >
              {BLOG_LIST.map((item) => (
                <Box
                  key={item.href}
                  w={{ base: '39vw', md: '40vw', lg: '30vw' }}
                  pb={{ base: 3, lg: 0 }}
                >
                  <Box>
                    <BaseLink
                      href={`/blogs/category/${item.href}`}
                      rel="noopener noreferrer"
                      h="full"
                      _hover={{
                        opacity: 1,
                      }}
                    >
                      <Box px={3} py={{ base: 4, lg: 5 }}>
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
