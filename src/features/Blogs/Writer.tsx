import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const BlogsWriter: FC = () => {
  return (
    <ContentWrapper
      as="section"
      bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
      py={'5'}
    >
      <FadeInAnimation>
        <Box>
          <Flex
            direction={{ md: 'row' }}
            display={{ lg: 'flex' }}
            mt={{ base: 5, xl: 6 }}
          >
            <Box mr={{ base: 0, lg: '10' }} mt={'10'} mb={{ base: '5', lg: 0 }}>
              <Image
                src={MEMBER_LIST[0].image}
                objectFit="contain"
                borderRadius={'100%'}
                alt=""
                mx={{ base: 'auto', lg: '' }}
              />
            </Box>
            <Box
              bg="white"
              fontSize={'xl'}
              p="8"
              w={'70vw'}
              mx={{ base: 'auto', lg: 0 }}
            >
              <Text
                fontWeight="bold"
                textAlign={'center'}
                fontSize={'4xl'}
                mb={'5'}
              >
                執筆者
              </Text>
              <Text>
                笹埜 健斗(株式会社Scrumy / 一般社団法人サステイナビリティ協会)
              </Text>
              <Text mt="5">●経歴</Text>
              <Text>
                笹野健斗（ささのけんと）。日本のサステナビリティ学者・実業家。
              </Text>
              <Text mt="5">
                高校時代に生死の境を彷徨い、哲学に目覚める。哲学オリンピック金メダリスト、京都大学法学部、東京大学大学院情報学環・学際情報学府を経て、合計5社の外部取締役や顧問を歴任。
              </Text>
              <Text mt="5">
                2021年4月、（株）Scrumyを創業、2022年4月、（一社）サステナビリティ協会代表理事に就任。現在、世界最大のサステナビリティ情報開示プラットフォーム「Scrumy-Code」の構築を目指し、サステナビリティ学の先進的な研究・事業を行う。
              </Text>
            </Box>
          </Flex>
          <Box
            display={'flex'}
            justifyContent={'center'}
            mt="7"
            columnGap={'8'}
          >
            <Image
              src={'/images/blog/youtube.png'}
              objectFit="contain"
              w={{ base: '16', md: '10' }}
              h={{ base: '16', md: '10' }}
              borderRadius={'100%'}
              alt=""
            />
            <Image
              src={'/images/blog/twitter.png'}
              objectFit="contain"
              w={{ base: '16', md: '10' }}
              h={{ base: '16', md: '10' }}
              borderRadius={'100%'}
              alt=""
            />
            <Image
              src={'/images/blog/instagram.png'}
              objectFit="contain"
              w={{ base: '16', md: '10' }}
              h={{ base: '16', md: '10' }}
              borderRadius={'100%'}
              alt=""
            />
            <Image
              src={'/images/blog/facebook.png'}
              objectFit="contain"
              w={{ base: '16', md: '10' }}
              h={{ base: '16', md: '10' }}
              borderRadius={'100%'}
              alt=""
            />
          </Box>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
