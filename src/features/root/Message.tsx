import { Box, Flex, Text } from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { RecruitCEO } from 'features/recruit/CEO';
import { FC } from 'react';

export const RootMessage: FC = () => {
  return (
    <IdWrapper id="message">
      <ContentWrapper as="section">
        <FadeInAnimation>
          <PrimaryTitle en="Message" />

          <Flex
            direction="row-reverse"
            display={{ lg: 'flex', md: 'block' }}
            mt={{ base: 5, xl: 6 }}
          >
            <Box fontSize={0} position="relative" mt={{ base: 5, xl: 0 }}>
              <RecruitCEO />
            </Box>

            <Box mt={{ base: 5, xl: 0 }}>
              <Box gridArea={{ xl: 'title' }}>
                <Text
                  as="span"
                  fontSize={{ base: 'xl', '2xl': '2xl' }}
                  fontWeight="bold"
                  display={{ xl: 'inline-block' }}
                  px={{ xl: 3 }}
                  py={{ xl: 2 }}
                  bg={{ xl: 'main.100' }}
                  mt={{ xl: 3 }}
                  mb={{ base: 10, xl: 6 }}
                >
                  <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                    <Text
                      as="span"
                      display="inline-block"
                      bg="main.100"
                      px={{ base: 2, xl: 0 }}
                      py={{ base: 1, xl: 0 }}
                      mt={{ base: 2, xl: 0 }}
                    >
                      持続可能な資本主義を
                    </Text>
                  </Text>
                  <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                    <Text
                      as="span"
                      display="inline-block"
                      bg="main.100"
                      px={{ base: 2, xl: 0 }}
                      py={{ base: 1, xl: 0 }}
                      mt={{ base: 2, xl: 0 }}
                    >
                      日本から世界へ
                    </Text>
                  </Text>
                </Text>
              </Box>
              <Box
                mt={{ base: 5, xl: 6 }}
                gridArea={{ xl: 'content' }}
                fontSize="md"
              >
                <Text>
                  Scrumyは「利益追求」と「幸福追求」を両立できる社会の実現を目指しています。
                </Text>
                <Box display={{ md: 'block' }}>
                  <Text mt={6}>
                    ミッションは、世界一のゼブラ企業として「資本主義経済システム」と「民主政治システム」の「API連携」を行うことです。そのためのキーワードとして「サステナビリティ」を中心に据えています。
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
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
