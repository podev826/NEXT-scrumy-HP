import { Box, Text } from '@chakra-ui/react';
import { PrimaryTitle } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import Image from 'next/image';
import { FC } from 'react';

export const AboutMessage: FC = () => {
  return (
    <ContentWrapper as="section" bgType="dotted">
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
                px={{ base: '10px', xl: '15px' }}
                py={{ base: '5px', xl: '10px' }}
              >
                法人手続をデジタル化し、
              </Text>
            </Text>
            <Text
              as="span"
              display={{ xl: 'inline-block' }}
              px={{ xl: '15px' }}
              py={{ xl: '10px' }}
              bg={{ xl: 'main.100' }}
              mt={{ xl: 6 }}
            >
              <Text as="span" display={{ base: 'block', xl: 'inline' }}>
                <Text
                  as="span"
                  display="inline-block"
                  bg="main.100"
                  px={{ base: '10px', xl: 0 }}
                  py={{ base: '5px', xl: 0 }}
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
                  px={{ base: '10px', xl: 0 }}
                  py={{ base: '5px', xl: 0 }}
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
          <Text mt={6}>
            今日「21世紀の石油」とも言われるようになった「データ」。
            <br />
            何をするにもデータの利活用が叫ばれるようになり、SaaSサービス導入によって大量のデータが流通するようになりました。しかしこれによって年々サイバー攻撃などのセキュリティリスクが増加していることも否めません。
            <br />
            このような状況を打破すべく、弊社は力強く研究および開発を続けてまいります。
          </Text>
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
    </ContentWrapper>
  );
};
