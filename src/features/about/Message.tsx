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
                <Text as="span" display={'block'}>
                  <Text
                    as="span"
                    display="inline-block"
                    bg="main.100"
                    px={{ base: 2, xl: 3 }}
                    py={{ base: 1, xl: 2 }}
                  >
                    法人手続をデジタル化し、
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
                      データサイエンスで
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
                弊社は行政サービスと民間企業を結びつけるための基盤である「情報ガバナンス」に力を入れております。無意味な大量の「データ」を意味のある「インフォメーション」に。それを知恵や文化のレベルにまで高められた「ナレッジ」へと変換。更には循環させていく仕組みをデザインしていくことで、行政サービスと法人様の懸け橋となる情報インフラを構築していく。という確固たる哲学を持って事業に取り組んでおります。
              </Text>
              <Box display={{ base: 'none', md: 'block' }}>
                <Text mt={6}>
                  今日「21世紀の石油」とも言われるようになった「データ」。
                  <br />
                  何をするにもデータの利活用が叫ばれるようになり、SaaSサービス導入によって大量のデータが流通するようになりました。しかしこれによって年々サイバー攻撃などのセキュリティリスクが増加していることも否めません。
                  <br />
                  このような状況を打破すべく、弊社は力強く研究および開発を続けてまいります。
                </Text>
              </Box>
              <Box display={{ md: 'none' }}>
                <Accordion allowToggle allowMultiple>
                  <AccordionItem border="none" mt={5}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionPanel pt={0} px={0} pb={5}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsum, quidem. Eum nesciunt quaerat eveniet,
                          dolor quibusdam aperiam animi deleniti accusamus
                          voluptatum, labore temporibus explicabo neque cum
                          officiis harum, fuga voluptates!
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
