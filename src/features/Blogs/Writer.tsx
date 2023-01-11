import { Box, Flex, Text } from '@chakra-ui/react';
import { BaseImage, FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const BlogsWriter: FC = () => {
  return (
    <ContentWrapper as="section">
      <FadeInAnimation>
        <Box bgGradient="linear(to-r,accent.200,accent.100,accent.300)">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            display={{ lg: 'flex', md: 'block' }}
            mt={{ base: 5, xl: 6 }}
          >
            <Box>
              <BaseImage
                src={MEMBER_LIST[0].image}
                width={726}
                height={726}
                alt=""
              />
            </Box>
            <Box px={{ xl: 3 }} py={{ xl: 2 }} bg="white">
              <Box gridArea={{ xl: 'title' }}>
                <Text
                  fontSize={{ base: 'xl', '2xl': '2xl' }}
                  fontWeight="bold"
                  textAlign={'center'}
                >
                  <Text
                    as="span"
                    display={{ xl: 'inline-block' }}
                    px={{ xl: 3 }}
                    py={{ xl: 2 }}
                    mt={{ xl: 3 }}
                    mb={{ base: 10, xl: 6 }}
                  >
                    <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                      <Text
                        as="span"
                        display="inline-block"
                        px={{ base: 2, xl: 0 }}
                        py={{ base: 1, xl: 0 }}
                        mt={{ base: 2, xl: 0 }}
                      >
                        執筆者
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </Box>
              <Box mt={{ base: 5, xl: 6 }} gridArea={{ xl: 'content' }}>
                <Text>
                  Scrumyは「利益追求」と「幸福追求」を両立できる社会の実現を目指しています。
                </Text>
                <Box display={{ md: 'block' }}>
                  <Text mt={6}>
                    ミッションは、世界一のゼブラ企業にとして「資本主義経済システム」と「民主政治システム」の「API連携」を行うことです。そのためのキーワードとして「サステナビリティ」を中心に据えています。
                  </Text>
                </Box>
                <Box display={{ md: 'block' }}>
                  <Text mt={6}>
                    おかげさまで、弁護士、会計士、産業医、証券アナリスト、サステナビリティ学者など多種多様な分野の研究と実務に通じたメンバーが集い、科学的手法に基づいたデータドリブンな情報基盤をご提供いたします。
                  </Text>
                </Box>
              </Box>
              <Text
                mt={{ base: 5, xl: 7 }}
                fontWeight="bold"
                fontSize={{ xl: 'xl' }}
                textAlign={{ xl: 'right' }}
              >
                <Text
                  as="span"
                  display={{ base: 'block', xl: 'inline' }}
                  mr={{ xl: 4 }}
                >
                  株式会社Scrumy 代表取締役
                </Text>
                <Text
                  as="span"
                  display={{ base: 'block', xl: 'inline' }}
                  mt={{ base: 1, xl: 0 }}
                >
                  笹埜 健斗
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
