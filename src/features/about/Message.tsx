import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  AngleUpIcon,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import Image from 'next/image';
import { FC } from 'react';

export const AboutMessage: FC = () => {
  return (
    <IdWrapper id="message">
      <ContentWrapper as="section" bgType="dotted">
        <FadeInAnimation>
          <PrimaryTitle ja="代表メッセージ" en="Message" />
          <Box
            mt={{ base: 8, xl: 16 }}
            display={{ xl: 'grid' }}
            gridTemplateAreas={{
              xl: `'. title . image' '. content . image'`,
            }}
            gridTemplateColumns={{
              xl: '56px calc((100% - 104px) * 628/1144) 48px calc((100% - 104px) * 516/1144)',
            }}
            gridTemplateRows={{ xl: 'auto' }}
          >
            <Box gridArea={{ xl: 'title' }}>
              <Text fontSize={{ base: 'xl', '2xl': '2xl' }} fontWeight="bold">
                <Text
                  as="span"
                  display={{ xl: 'inline-block' }}
                  px={{ xl: 3 }}
                  py={{ xl: 2 }}
                  bg={{ xl: 'main.100' }}
                  mt={{ xl: 6 }}
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
                      サステイナブル経営の
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
                      スペシャリストとして
                    </Text>
                  </Text>
                </Text>
                <Text
                  as="span"
                  display={{ xl: 'inline-block' }}
                  px={{ xl: 3 }}
                  py={{ xl: 2 }}
                  bg={{ xl: 'main.100' }}
                  mt={{ xl: 6 }}
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
                      SDGs時代の
                    </Text>
                  </Text>
                  <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                    <Text
                      as="span"
                      display="inline-block"
                      bg="main.100"
                      letterSpacing={{ base: '0.02em', md: '0.04em' }}
                      px={{ base: 2, xl: 0 }}
                      py={{ base: 1, xl: 0 }}
                      mt={{ base: 2, xl: 0 }}
                    >
                      「新たな経営基盤」を作り出す
                    </Text>
                  </Text>
                </Text>
              </Text>
            </Box>
            <Box
              fontSize={0}
              position="relative"
              w="full"
              pt="75%"
              mt={{ base: 5, xl: 0 }}
              gridArea={{ xl: 'image' }}
            >
              <Image
                src="/images/about/about_message01.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box mt={{ base: 5, xl: 6 }} gridArea={{ xl: 'content' }}>
              <Text>
                私たちScrumyは、GaaS（サービスとしてのガバナンス）を提供するゼブラ企業（Zebras）として、資本主義のSX（サステナビリティ・トランスフォーメーション）を推進しています。企業におけるESG情報（非財務情報）開示戦略をサポートすることで、多種多様なステークホルダーと協働するためのSDGs時代の「新たな経営基盤」を作り出してまいります。
              </Text>
              <Box display={{ base: 'none', md: 'block' }}>
                <Text mt={6}>
                  ガバナンスは、多くの場合、企業の事業推進や利益とはかけ離れた、乗り越えるための面倒な負担やハードルと見なされています。しかし、私たちはそのようには考えません。ガバナンスは、持続可能な企業経営の提供にとって不可欠であるにもかかわらず一見相対するように思える「ESG情報開示の強化」と「企業価値の最大化」を両立させる経営デザインとして、再構築できると考えています。
                </Text>
              </Box>
              <Box display={{ md: 'none' }}>
                <Accordion allowToggle allowMultiple>
                  <AccordionItem border="none" mt={5}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionPanel pt={0} px={0} pb={5}>
                          ガバナンスは、多くの場合、企業の事業推進や利益とはかけ離れた、乗り越えるための面倒な負担やハードルと見なされています。しかし、私たちはそのようには考えません。ガバナンスは、持続可能な企業経営の提供にとって不可欠であるにもかかわらず一見相対するように思える「ESG情報開示の強化」と「企業価値の最大化」を両立させる経営デザインとして、再構築できると考えています。
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
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
