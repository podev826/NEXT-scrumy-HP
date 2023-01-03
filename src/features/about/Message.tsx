import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  AngleUpIcon,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { RecruitCEO } from 'features/recruit/CEO';
import { FC } from 'react';

export const AboutMessage: FC = () => {
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
                <Text fontSize={{ base: 'xl', '2xl': '2xl' }} fontWeight="bold">
                  <Text
                    as="span"
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
                        持続可能な新しい資本主義を
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
                </Text>
              </Box>
              <Box mt={{ base: 5, xl: 6 }} gridArea={{ xl: 'content' }}>
                <Text>
                  弊社では弁護士、会計士、産業医、証券アナリスト、サステナビリティ学者など多種多様な分野の研究と実務に通じたメンバーが集い、科学的手法に基づいたデータドリブンな情報基盤をご提供いたします。
                </Text>
                <Box display={{ base: 'none', md: 'block' }}>
                  <Text mt={6}>
                    Scrumyでは、一人ひとりが企画部長であり、発案者であり、代表者であるという誇りを持ちながら、日々壮大な事業にコミットしています。
                  </Text>
                </Box>
                <Box display={{ base: 'none', md: 'block' }}>
                  <Text mt={6}>
                    日本や世界が抱える社会課題に真摯に向き合い、どうすれば乗り越えられるのか。いつも問い続け、考え続け、語り続け、動き続ける。どんな領域でも役立つ、社会課題解決に向けて徹底的にやり抜くための「真の哲学力」が自然と身につくことが、当社ならではの魅力です。
                  </Text>
                </Box>
                <Box display={{ base: 'none', md: 'block' }}>
                  <Text mt={6}>
                    Scrumyの思想や哲学にビビッと共感した人、多種多様な分野を代表する素敵なメンバーと仕事をしてみたい人、高いスキルを貪欲に求める人のジョインを、メンバー一同心からお待ち申し上げております。
                  </Text>
                </Box>
              </Box>
              <Box display={{ md: 'none' }}>
                <Accordion allowToggle allowMultiple>
                  <AccordionItem border="none" mt={5}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionPanel pt={0} px={0} pb={5}>
                          Scrumyでは、一人ひとりが企画部長であり、発案者であり、代表者であるという誇りを持ちながら、日々壮大な事業にコミットしています。
                        </AccordionPanel>
                        <AccordionPanel pt={0} px={0} pb={5}>
                          日本や世界が抱える社会課題に真摯に向き合い、どうすれば乗り越えられるのか。いつも問い続け、考え続け、語り続け、動き続ける。どんな領域でも役立つ、社会課題解決に向けて徹底的にやり抜くための「真の哲学力」が自然と身につくことが、当社ならではの魅力です。
                        </AccordionPanel>
                        <AccordionPanel pt={0} px={0} pb={5}>
                          Scrumyの思想や哲学にビビッと共感した人、多種多様な分野を代表する素敵なメンバーと仕事をしてみたい人、高いスキルを貪欲に求める人のジョインを、メンバー一同心からお待ち申し上げております。
                        </AccordionPanel>
                        <AccordionButton
                          display={'flex'}
                          justifyContent="center"
                          flexDirection={'column'}
                          p={0}
                          color="sub.200"
                          border="none"
                          _hover={{
                            background: 'none',
                            boxShadow: 'transparent',
                          }}
                        >
                          {isExpanded ? (
                            <Box
                              display={'flex'}
                              flexDirection="column"
                              justifyContent={'center'}
                            >
                              <AngleUpIcon />
                              <Box mt={'-14px'}>
                                <AngleUpIcon />
                              </Box>
                            </Box>
                          ) : null}
                          <Box fontWeight={'bold'} fontSize="sm">
                            {isExpanded ? <p>close</p> : <p>view more</p>}
                          </Box>
                          {isExpanded ? null : (
                            <Box
                              display={'flex'}
                              flexDirection="column"
                              justifyContent={'center'}
                            >
                              <AngleDownIcon />
                              <Box mt={'-14px'}>
                                <AngleDownIcon />
                              </Box>
                            </Box>
                          )}
                        </AccordionButton>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
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
