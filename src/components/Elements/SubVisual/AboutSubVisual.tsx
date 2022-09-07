import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { FadeInAnimation } from '../Animations';

export const AboutSubVisual: FC = () => {
  return (
    <Box bg="main.200" pt={{ base: '195px', md: '104px', xl: '120px' }}>
      <Box
        w="full"
        mx="auto"
        maxW={1440}
        minH={{ base: '115.467vw', md: '35.556vw', '2xl': '512px' }}
        px={{ md: 10, lg: 16, xl: 24 }}
        display="grid"
        alignItems="stretch"
      >
        <Box
          backgroundImage={{
            base: `url("/images/about/about_sub-visual_sp.png")`,
            md: `url("/images/about/about_sub-visual_pc.png")`,
          }}
          backgroundSize="contain"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
          display="grid"
          alignItems="stretch"
          position="relative"
        >
          <FadeInAnimation>
            <Text
              position="absolute"
              left={'50%'}
              transform="translateX(-50%)"
              top={{ base: '-10vw', md: '6.67vw', '2xl': '96px' }}
              fontSize={{ base: '12.8vw', md: '6.111vw', '2xl': '88px' }}
              fontWeight="bold"
              textAlign={'center'}
              lineHeight="0.96"
              color="base.100"
              opacity={'0.24'}
            >
              <Text as="span" display={'block'} whiteSpace="nowrap">
                <Text as="span" display={{ base: 'block', md: 'inline' }}>
                  Unicorn
                </Text>
                <Text as="span" display={{ base: 'block', md: 'inline' }}>
                  {' '}
                  &amp;{' '}
                </Text>
                <Text as="span" display={{ base: 'block', md: 'inline' }}>
                  Zebras
                </Text>
              </Text>
            </Text>
            <Flex
              flexDirection={'column'}
              alignItems="center"
              justifyContent="flex-start"
              textAlign={'center'}
              mx="auto"
              w="full"
              position={'relative'}
              zIndex="2"
            >
              <Text
                as="h1"
                mt={{ md: '4.444vw', '2xl': '64px' }}
                fontSize={{ base: '7.467vw', md: '3.333vw', '2xl': '6xl' }}
                fontWeight="bold"
                lineHeight={{ base: '1.32', md: '1.5' }}
              >
                <Box as="span" display="block">
                  目指すは日本一の
                </Box>
                <Box as="span" display="block">
                  ゼブラ企業 (Zebras)
                </Box>
              </Text>
              <Text
                w={{ base: '72vw', md: 'auto' }}
                fontSize={{ base: '4.8vw', md: '1.667vw', '2xl': '2xl' }}
                fontWeight="medium"
                lineHeight="1.667"
                mt={{ base: '14.933vw', md: '1.667vw', xl: 6 }}
              >
                <Box as="span" display={{ md: 'block' }}>
                  当社は「サステイナブル経営」を世界に発信し、
                </Box>
                <Box as="span" display={{ md: 'block' }}>
                  社会的インパクトに向けたインフラを創出します。
                </Box>
              </Text>
            </Flex>
          </FadeInAnimation>
        </Box>
      </Box>
    </Box>
  );
};
