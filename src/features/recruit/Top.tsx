import { Box, Text } from '@chakra-ui/react';
import { FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const RecruitTop: FC = () => {
  return (
    <ContentWrapper py="0" pt={{ base: 16, md: 20, xl: 24 }}>
      <FadeInAnimation>
        <Box
          fontSize={{ base: '7.466vw', md: '5.111vw', xl: '7xl', '2xl': '8xl' }}
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
            fontSize={{ base: 'md', lg: 'lg' }}
            fontWeight="bold"
            textAlign={'center'}
            lineHeight={{ base: '2', md: '2.2', xl: '2.4' }}
          >
            <Text as="span" margin={{ lg: 'auto' }}>
              「スマート」は、決してクールさやスタイリッシュさのみを意味するわけではありません。
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              より客観的に、次元を上げて、思考し行動に移すサイクルが実現された状態を指します。
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              「サステナブル」は、決して自然環境と経済に対象が限定されているわけではありません。
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              よりマクロに、「スマート」な状態を継続し、目指す未来へ向かい続けることを指します。
            </Text>
            <Text as="span" display={{ lg: 'block' }}>
              我々は、常に「スマートであるか」「サステナブルであるか」を日々問い続けています。
            </Text>
          </Text>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
