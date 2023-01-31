import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { AngleRightIcon, BaseLink, FadeInAnimation } from 'components/Elements';
import React, { FC } from 'react';

export const RootHero: FC = () => {
  return (
    <FadeInAnimation>
      <Stack
        spacing="10"
        w="100vw"
        pt={{ base: '120px', sm: '120px', lg: '180px', xl: '230px' }}
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
              justifyContent={{ base: 'center', sm: 'center', lg: 'normal' }}
            >
              <Text
                as="p"
                fontSize={{
                  base: '6.46vw',
                  sm: '4.5vw',
                  lg: '3.33vw',
                }}
                bg="white"
                px={{ base: '3.2vw', md: '0', xl: '0.83vw' }}
                display="inline-block"
              >
                未来を見据えた第一歩
              </Text>
            </Box>
          <Box
            py={{ base: '4.8vw', sm: '1vw' }}
            px={{ base: '6.4vw', sm: 0 }}
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
            fontSize={{ base: '3.85vw', sm: '2.3vw', lg: '1.5vw' }}
            textAlign="center"
            fontWeight={'medium'}
            mt={{ base: '8.53vw', sm: '4.167vw', xl: '2.5vw' }}
          >
            <Text as="span" display={{ sm: 'block' }}>
              競争と共創を両立できる時代
            </Text>
            <Text as="span" display={{ sm: 'block' }}>
              サステナブルファイナンスで金融資本市場の懸け橋となる
            </Text>
          </Text>
          <Box
            maxW={{ base: '64vw', sm: '40vw', xl: '30.278vw' }}
            mx="auto"
            mt={{ base: 6, sm: '2vh', lg: '9vh', xl: '14vh' }}
          >
            <BaseLink
              href="/about"
              py={{ base: '1.5vw', xl: '1.528vw' }}
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
              fontSize={{ base: '4.267vw', sm: '2.344vw', lg: '1.389vw' }}
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
