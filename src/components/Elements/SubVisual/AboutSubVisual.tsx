import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { FadeInAnimation } from '../Animations';

export const AboutSubVisual: FC = () => {
  return (
    <Box
      // smサイズの時のheightを修正
      backgroundImage={{
        base: "url('/images/about/about_sub-visual_bg.png')",
      }}
      backgroundSize={{ sm: 'cover', md: 'cover' }}
      bgPosition="center"
      bgRepeat={'no-repeat'}
      alignItems="center"
      pt={{ base: '33px', md: '18px', xl: '20px' }}
      pb={{ base: '0', md: '17vh', xl: '20vh' }}
      mt={{ base: '100px', md: '110px', xl: '130px' }}
      h={{
        base: '60vh',
        sm: '65vh',
        md: '55vh',
        lg: '65vh',
        xl: '75vh',
        '2xl': '85vh',
      }}
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
              mt={{ md: '7.444vw', xl: '104px' }}
              fontSize={{
                base: '6.467vw',
                sm: '5vw',
                md: '3.333vw',
                '2xl': '6xl',
              }}
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
              fontSize={{
                base: '18px',
                md: '2.1vw',
                lg: '1.767vw',
              }}
              fontWeight="medium"
              lineHeight="1.667"
              mt={{ base: '15vw', md: '13vw' }}
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
