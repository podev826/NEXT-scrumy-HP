import { Box, Link, Text } from '@chakra-ui/react';
import { FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { BlogItemProps } from 'types';

type blogType = {
  blog: BlogItemProps;
};

export const BlogsShare: FC<blogType> = ({ blog }) => {
  const router = useRouter();
  return (
    <ContentWrapper as="section" px="5">
      <FadeInAnimation>
        <Box textAlign={'center'}>
          <Box>
            <Text>シェアする</Text>
          </Box>
          <Box display={'flex'} columnGap="7" mt="5">
            <Link
              target="_blank"
              href={
                'https://twitter.com/intent/tweet?text=' +
                blog.title +
                'https://www.scrumy.co.jp/' +
                router.asPath
              }
              bg="#1DA0F1"
              color="white"
              w="390px"
              py="2"
              fontSize={'sm'}
              shadow="xl"
              cursor={'pointer'}
            >
              Twitter
            </Link>
            <Link
              href="#"
              bg="#1877F2"
              color="white"
              w="390px"
              py="2"
              fontSize={'sm'}
              shadow="xl"
              cursor={'pointer'}
            >
              facebook
            </Link>
            <Link
              href="#"
              bg="#D9D9D9"
              w="390px"
              py="2"
              fontSize={'sm'}
              shadow="xl"
              cursor={'pointer'}
            >
              リンクをコピー
            </Link>
          </Box>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
