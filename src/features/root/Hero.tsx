import { Box, Image, Stack, Text } from '@chakra-ui/react';
import {
  AngleRightIcon,
  BaseImage,
  BaseLink,
  FadeInAnimation,
} from 'components/Elements';
import React, { FC } from 'react';

export const RootHero: FC = () => {
  return (
    <FadeInAnimation>
      <Stack
        spacing="10"
        w="100vw"
        h={{ base: '120vh', sm: 'calc(1px + 70vw)', xl: '80vh' }}
        pt={{ base: '60px', sm: '130px', xl: '180px' }}
        pl={{ base: 0, sm: 5, xl: 0 }}
        justifyContent="center"
        direction={{ base: 'column', sm: 'row' }}
      >
        <Box
          pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
          px={{ base: '6.4vw', sm: 0 }}
          justifyContent="left"
        >
          <Box fontWeight="bold">
            <Box display={'flex'}>
              <Text
                as="p"
                fontSize={{ base: '7.46vw', sm: '4.17vw', xl: '3.33vw' }}
                bg="white"
                px={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                display="inline-block"
              >
                No Sustainability
              </Text>
            </Box>
            <Box display={'flex'}>
              <Text
                as="p"
                fontSize={{ base: '7.46vw', sm: '4.17vw', xl: '3.33vw' }}
                bg="white"
                mt={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                px={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                display="inline-block"
              >
                No Grouth
              </Text>
            </Box>
          </Box>
          <Text
            fontSize={{ base: '4.0vw', sm: '2.0vw', xl: '1.5vw' }}
            textAlign="center"
            fontWeight={'medium'}
            mt={{ base: '8.53vw', sm: '4.167vw', xl: '2.5vw' }}
          >
            <Text as="span" display={{ sm: 'block' }}>
              財務会計だけで企業価値が決まらない時代を目指して
            </Text>
            <Text as="span" display={{ sm: 'block' }}>
              「サステナブルファイナンス」領域を創造します
            </Text>
          </Text>
          <Box
            maxW={{ base: '64vw', sm: 'full', xl: '30.278vw' }}
            mx="auto"
            mt={{ base: 6, sm: '5vw' }}
          >
            <BaseLink
              href="/about"
              py={{ base: '3.2vw', xl: '1.528vw' }}
              px={{ base: 4, sm: 6 }}
              w="full"
              color="base.100"
              bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
              transitionProperty="all"
              transitionTimingFunction="linear"
              transitionDuration="fast"
              boxShadow={'primary'}
              _hover={{
                boxShadow: 'transparent',
                backgroundColor: 'sub.200',
                opacity: 1,
              }}
              borderRadius="full"
              fontSize={{ base: '4.267vw', sm: '2.344vw', xl: '1.389vw' }}
              fontWeight={'bold'}
              position="relative"
            >
              <Text textAlign={'center'} pr={{ base: '1.6vw', md: 0 }}>
                わたしたちについて
              </Text>
              <Box
                position="absolute"
                right={{ base: '6.4vw', xl: '4.167vw' }}
                top="50%"
                transform={'translateY(-50%)'}
              >
                <AngleRightIcon />
              </Box>
            </BaseLink>
          </Box>
        </Box>
        <Box
          pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
          px={{ base: '6.4vw', sm: 0 }}
          display={'flex'}
          justifyContent="center"
        >
          <Image
            src={'/images/root/root_hero.png'}
            width={{ base: 500, sm: 400, xl: 500 }}
            height={{ base: 500, sm: 400, xl: 500 }}
            alt=""
          />
        </Box>
      </Stack>
    </FadeInAnimation>
  );
};
