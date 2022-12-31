import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { FadeInAnimation } from '../Animations';

export const AboutSubVisual: FC = () => {
  return (
    <Box
      backgroundImage={{
        base: "url('/images/about/about_sub-visual_bg.png')",
        sm: "url('/images/about/about_sub-visual_bg.png')",
      }}
      backgroundSize="cover"
      bgPosition="center"
      bgRepeat={'no-repeat'}
      alignItems="center"
      pt={{ base: '33px', md: '18px', xl: '20px' }}
      mt={{ base: '100px', md: '110px', xl: '130px' }}
    >
      <Box
        w="full"
        mx="auto"
        maxW={1440}
        minH={{ base: '115.467vw', md: '35.556vw', '2xl': '512px' }}
        px={{ md: 10, lg: 16, xl: 24 }}
        display="grid"
        alignItems="stretch"
      >
        <FadeInAnimation>
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
              fontSize={{ base: '6.467vw', md: '3.333vw', '2xl': '6xl' }}
              fontWeight="bold"
              lineHeight={{ base: '1.32', md: '1.5' }}
            >
              <Box as="span" display={{ md: 'inline', base: 'block' }}>
                世界一のESG
              </Box>
              <Box as="span" display={{ md: 'inline', base: 'block' }}>
                プラットフォーマーになる
              </Box>
            </Text>
            <Text
              w={{ base: '72vw', md: 'auto' }}
              fontSize={{ base: '3.8vw', md: '1.767vw' }}
              fontWeight="medium"
              lineHeight="1.667"
              mt={{ base: '30vw', md: '10vw' }}
            >
              <Box as="span" display={{ base: 'none', md: 'block' }}>
                「サステナビリティ」をブームで終わらせず、経営戦略に革命を起こすために、
              </Box>
              <Box as="span" display={{ base: 'none', md: 'block' }}>
                サービスの開発に加えて、領域の先駆者として政策・法律の整備を含めて取り組んでいます。
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                「サステナビリティ」をブームで
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                終わらせず、経営戦略に革命を
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                起こすために、サービスの開発に
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                加えて、領域の先駆者として
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                政策・法律の整備を含めて
              </Box>
              <Box as="span" display={{ base: 'block', md: 'none' }}>
                取り組んでいます。
              </Box>
            </Text>
          </Flex>
        </FadeInAnimation>
      </Box>
    </Box>
  );
};
