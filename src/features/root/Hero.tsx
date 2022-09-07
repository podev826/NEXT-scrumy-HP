import { Box, Text } from '@chakra-ui/react';
import {
  AngleRightIcon,
  BaseImage,
  BaseLink,
  FadeInAnimation,
} from 'components/Elements';
import React, { FC } from 'react';

export const RootHero: FC = () => {
  return (
    <Box
      w="100vw"
      h={{ base: '100vh', sm: 'calc(104px + 56.25vw)', xl: '100vh' }}
      pt={{ sm: '104px', xl: 0 }}
      bg="main.200"
      backgroundImage={{
        base: "url('/images/root/root_hero_image01_sp.jpg')",
        sm: "url('/images/root/root_hero_image01_pc.jpg')",
      }}
      backgroundSize={{ base: 'contain', sm: 'cover' }}
      bgPosition="bottom"
      bgRepeat={'no-repeat'}
      display={'grid'}
      alignItems="center"
      justifyContent={'center'}
    >
      <FadeInAnimation>
        <Box
          pb={{ base: '12.8vw', sm: '5.2vw', xl: '2.222vw' }}
          px={{ base: '6.4vw', sm: 0 }}
        >
          <Box fontWeight="bold">
            <Box display={'flex'} justifyContent="center">
              <Text
                as="p"
                fontSize={{ base: '7.46vw', sm: '4.17vw', xl: '3.33vw' }}
                bg="white"
                px={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                display="inline-block"
              >
                SDGs時代の
              </Text>
            </Box>
            <Box display={'flex'} justifyContent="center">
              <Text
                as="p"
                fontSize={{ base: '7.46vw', sm: '4.17vw', xl: '3.33vw' }}
                bg="white"
                mt={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                px={{ base: '3.2vw', md: '1.56vw', xl: '0.83vw' }}
                display="inline-block"
              >
                経営戦略に最適解を
              </Text>
            </Box>
          </Box>
          <Text
            fontSize={{ base: '4.8vw', sm: '2.344vw', xl: '1.667vw' }}
            textAlign="center"
            fontWeight={'medium'}
            mt={{ base: '8.53vw', sm: '4.167vw', xl: '2.5vw' }}
          >
            <Text as="span" display={{ sm: 'block' }}>
              サステイナブル経営のための
            </Text>
            <Text as="span" display={{ sm: 'block' }}>
              ESG情報開示戦略をサポートします。
            </Text>
          </Text>
          <Box
            maxW={{ base: '64vw', sm: 'full', xl: '30.278vw' }}
            mx="auto"
            mt={{ base: 6, sm: '3.333vw' }}
          >
            <BaseLink
              href="/about"
              py={{ base: '3.2vw', xl: '1.528vw' }}
              px={{ base: 4, sm: 6 }}
              w="full"
              color="base.100"
              bg="sub.100"
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
      </FadeInAnimation>
    </Box>
  );
};
