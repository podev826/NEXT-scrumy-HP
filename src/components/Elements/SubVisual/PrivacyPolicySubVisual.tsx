import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { FadeInAnimation } from '../Animations';

export const PrivacyPolicySubVisual: FC = () => {
  return (
    <Box
      bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
      pt={{ base: '175px', md: '104px', xl: '120px' }}
      pb={{ base: '44px', md: '0' }}
    >
      <Box
        w="full"
        mx="auto"
        maxW={1440}
        minH={{ base: '109.333vw', md: '35.556vw', '2xl': '512px' }}
        px={{ md: 10, lg: 16, xl: 24 }}
        display="grid"
        alignItems="stretch"
      >
        <FadeInAnimation>
          <Flex
            py={{ md: '8.333vw', '2xl': '120px' }}
            px={{ md: '5.833vw', '2xl': '84px' }}
            mx="auto"
            w="full"
          >
            <Box
              px={{ base: '13.867vw', md: '0' }}
              w={{
                md: 'calc((580 / 1080) * 100%)',
              }}
            >
              <Text
                as="h1"
                fontSize={{ base: '12.8vw', md: '6.111vw', '2xl': '9xl' }}
                fontStyle="italic"
                lang="en"
                lineHeight="1.12"
              >
                <Box as="span" display="block" color="white">
                  Privacy
                </Box>
                <Box
                  as="span"
                  display="block"
                  ml={{ md: '13.056vw', '2xl': '0px' }}
                  mt={{ md: '0.83vw', '2xl': '12px' }}
                  color="white"
                >
                  Policy
                </Box>
              </Text>
            </Box>
          </Flex>
        </FadeInAnimation>
      </Box>
    </Box>
  );
};
