import { Box, Image, Stack } from '@chakra-ui/react';
import { BaseLink, FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { IdWrapper } from 'components/Layouts';
import { BLOG_LIST } from 'configs';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

export const BlogCategory: FC = () => {
  const router = useRouter();
  return (
    <IdWrapper id="category">
      <Box
        as="section"
        py={{ base: 7, lg: 14 }}
        px={8}
        pt={{ base: 76, lg: 10 }}
        mx="auto"
        bg="gray.100"
      >
        <FadeInAnimation>
          <Box>
            <PrimaryTitle en="Categories" />
          </Box>

          <Box
            pt={3}
            pb={{ base: '0.5vw' }}
            px={{ base: '6.4vw', sm: 0 }}
            justifyContent="center"
          >
            <Stack
              justifyContent="center"
              direction={{ base: 'column', sm: 'row' }}
              alignItems="center"
            >
              {BLOG_LIST.map((item) => (
                <Box
                  key={item.href}
                  w={{
                    base: '55vw',
                    sm: '33vw',
                    xl: '25vw',
                  }}
                  pb={{ base: 3, lg: 0 }}
                >
                  <Box
                    px={{ base: 1, md: 3 }}
                    py={{ base: 4, lg: 5 }}
                    as={'button'}
                    onClick={() => {
                      router.push(
                        `/blogs?blog%5Bmenu%5D%5Bcategory%5D=${item.name}`
                      );
                      router.events.on('routeChangeComplete', router.reload);
                    }}
                  >
                    <Image
                      src={item.image}
                      width="100%"
                      height="100%"
                      boxShadow={'lg'}
                      borderRadius="10px"
                      alt=""
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </FadeInAnimation>
      </Box>
    </IdWrapper>
  );
};
