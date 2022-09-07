import { Box, Text } from '@chakra-ui/react';
import { BaseImage, FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const RecruitTop: FC = () => {
  return (
    <ContentWrapper bgType="dotted" py="0" pt={{ base: 16, md: 20, xl: 24 }}>
      <FadeInAnimation>
        <Box
          fontSize={{ base: '7.466vw', md: '6.111vw', xl: '7xl', '2xl': '8xl' }}
          fontStyle="italic"
          fontWeight={'bold'}
          lang="en"
          textAlign={{ md: 'center' }}
        >
          <Text display={{ md: 'inline-block' }} letterSpacing={'0.04em'}>
            <Text as="span" color="accent.100">
              Be
            </Text>
            &nbsp;Smart,&nbsp;
          </Text>
          <Text
            letterSpacing={'0.04em'}
            textAlign={{ base: 'right', md: 'left' }}
            display={{ md: 'inline-block' }}
          >
            <Text as="span" color="accent.100">
              Be
            </Text>
            &nbsp;Sustainable.
          </Text>
        </Box>
        <Box mt={{ base: 8, md: 12, xl: 16 }}>
          <Text
            fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
            fontWeight="bold"
            textAlign={'center'}
            lineHeight={{ base: '2', md: '2.2', xl: '2.4' }}
          >
            <Text as="span" display={{ lg: 'block' }}>
              当社は行政手続DXの会社として、実社会及びメタバースにおける
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              情報ガバナンスや情報セキュリティの整備と強化に取り組んでいます。
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              Withコロナ時代のいまこそGaaSのデファクトスタンダードを
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              日本から世界へ発信するときです。私たちとともに働きやすい開発環境
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              を作ることで、新たな開発文化を創造しませんか？
            </Text>
          </Text>
        </Box>
        <Box mt={{ base: 8, xl: 12 }}>
          <Box display={{ md: 'none' }}>
            <BaseImage
              src="/images/recruit/recruit_main01_sp.png"
              width={1184}
              height={247}
              alt=""
            />
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <BaseImage
              src="/images/recruit/recruit_main01_pc.png"
              width={2496}
              height={424}
              alt=""
            />
          </Box>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
