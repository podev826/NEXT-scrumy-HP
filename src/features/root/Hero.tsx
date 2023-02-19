import { Box, Image, Stack, Text } from '@chakra-ui/react';
import {
  AngleRightIcon,
  BaseLink,
  FadeInAnimation,
  PrimaryLink,
} from 'components/Elements';
import React, { FC } from 'react';

export const RootHero: FC = () => {
  return (
    <FadeInAnimation>
      <Stack
        spacing="10"
        w="100vw"
        pt={{ base: '120px', sm: '130px', lg: '180px', xl: '230px' }}
        justifyContent="center"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box
          pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
          px={{ base: '6.4vw', sm: 0 }}
          justifyContent="left"
        >
          <Box fontWeight="bold">
            <Box
              display={'flex'}
              justifyContent={{ base: 'center', sm: 'center', lg: 'center' }}
            >
              <Text
                as="p"
                fontSize={{
                  base: '6.46vw',
                  sm: '4.7vw',
                  lg: '3.33vw',
                }}
                bg="white"
                px={{ base: '3.2vw', md: '0', xl: '0.83vw' }}
                display="inline-block"
              >
                未来を見据えた第一歩
              </Text>
            </Box>
          </Box>
          <Box
            py={{ base: '4.8vw', sm: '1vw' }}
            px={{ base: '6.4vw', sm: 0 }}
            mt={{ base: '5', lg: '0' }}
            display={{ sm: 'flex', lg: 'none' }}
            justifyContent="center"
          >
            <Image
              src={'/images/root/mainImage.png'}
              width={{ base: '60vw', sm: 300 }}
              height={{ base: '60vw', sm: 300 }}
              mx="auto"
              alt=""
            />
          </Box>
          <Text
            fontSize={{ base: '3.95vw', sm: '2.3vw', lg: '1.5vw' }}
            textAlign="center"
            fontWeight={'medium'}
            mt={{ base: '8.53vw', sm: '4.167vw', xl: '2.5vw' }}
          >
            <Text as="span" display={'block'}>
              競争と共創を両立できる時代
            </Text>
            <Text as="span" display={'block'}>
              サステナブルファイナンスで
            </Text>
            <Text as="span" display={'block'}>
              金融資本市場の懸け橋となる
            </Text>
          </Text>
          <Box
            mt={{ base: 9, xl: 10 }}
            mx={{ base: 'auto', md: 0 }}
            maxW="280px"
          >
            <PrimaryLink href="/news" variant={'primary'} w="full">
              私たちについて
            </PrimaryLink>
          </Box>
        </Box>
        <Box
          pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
          px={{ base: '6.4vw', sm: 0 }}
          display={{ base: 'none', lg: 'flex' }}
          justifyContent="center"
        >
          <Image
            src={'/images/root/mainImage.png'}
            width={{ lg: '35vw' }}
            height={{ lg: '35vw' }}
            alt=""
          />
        </Box>
      </Stack>
    </FadeInAnimation>
  );
};
