import { Box, Flex, Text } from '@chakra-ui/react';
import { SubVisualItemProps } from 'configs';
import { FC } from 'react';

import { FadeInAnimation } from '../Animations';

type PrimarySubVisualProps = {
  content: SubVisualItemProps;
};

export const PrimarySubVisual: FC<PrimarySubVisualProps> = ({ content }) => {
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
        minH={{ base: '69.333vw', md: '35.556vw', '2xl': '512px' }}
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
                md: '60vw',
              }}
            >
              <Text
                as="h1"
                fontSize={{ base: '12.8vw', md: '6.111vw', '2xl': '9xl' }}
                fontStyle="italic"
                lang="en"
                color="white"
              >
                {content.title}
              </Text>
              <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                <Text
                  fontSize={{ base: '4.2vw', md: '1.667vw', '2xl': '2xl' }}
                  fontWeight="bold"
                  lineHeight="1.667"
                  display="inline-block"
                  mt={{ base: 4, md: 1 }}
                  color="white"
                >
                  {content.text1}
                </Text>
                <Text
                  fontSize={{ base: '4.2vw', md: '1.667vw', '2xl': '2xl' }}
                  fontWeight="bold"
                  lineHeight="1.667"
                  display="inline-block"
                  mt={{ base: 4, md: 1 }}
                  color="white"
                >
                  {content.text2}
                </Text>
              </Text>
              <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                <Text
                  fontSize={{ base: '4.2vw', md: '1.667vw', '2xl': '2xl' }}
                  fontWeight="bold"
                  lineHeight="1.667"
                  display="inline-block"
                  mt={{ base: 4, md: 1 }}
                  color="white"
                >
                  {content.text3}
                </Text>
                <Text
                  fontSize={{ base: '4.2vw', md: '1.667vw', '2xl': '2xl' }}
                  fontWeight="bold"
                  lineHeight="1.667"
                  display="inline-block"
                  mt={{ base: 4, md: 1 }}
                  color="white"
                >
                  {content.text4}
                </Text>
              </Text>
            </Box>
          </Flex>
        </FadeInAnimation>
      </Box>
    </Box>
  );
};
