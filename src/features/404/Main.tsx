import { Box, Text } from '@chakra-ui/react';
import { AngleRightIcon, BaseImage, BaseLink } from 'components/Elements';
import React, { FC } from 'react';

export const NotFoundMain: FC = () => {
  return (
    <Box
      pt={{ base: '117px', md: '224px' }}
      pb={{ base: 16, md: 24 }}
      bg="main.200"
      px={6}
      textAlign={'center'}
    >
      <Box lang="en" fontWeight="bold">
        <Text fontSize={{ base: '6xl', md: '7xl' }} color="accent.300">
          404
        </Text>
        <Text
          as="h1"
          w={{ base: '112px', md: '137px' }}
          mx="auto"
          mt={{ md: '-12px' }}
        >
          <BaseImage
            src="/images/404/404_text.svg"
            width={137}
            height={26}
            alt="Not Found"
          />
        </Text>
      </Box>
      <Box
        mt={{ base: 8, md: 9 }}
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="bold"
      >
        <Text display={{ md: 'inline' }}>お探しのページが</Text>
        <Text display={{ md: 'inline' }}>見つかりませんでした。</Text>
      </Box>
      <Box textAlign={{ base: 'left', md: 'center' }} mt={{ base: 4, md: 6 }}>
        <Text display={{ base: 'inline', md: 'block' }}>
          申し訳ございません。お探しのページが見つかりませんでした。
        </Text>
        <Text display={{ base: 'inline', md: 'block' }} mt={{ md: 2 }}>
          一時的にアクセスが出来ない状況にあるか、移動もしくは削除された可能性があります。
        </Text>
      </Box>
      <Box
        maxW={{ base: '280px', md: '440px' }}
        mx="auto"
        mt={{ base: 6, md: 9 }}
      >
        <BaseLink
          href="/"
          py={{ base: 3, md: 6 }}
          px={{ base: 4, md: 6 }}
          w="full"
          color="base.100"
          bg="sub.100"
          boxShadow={'primary'}
          transitionProperty="all"
          transitionTimingFunction="linear"
          transitionDuration="fast"
          _hover={{
            boxShadow: 'transparent',
            backgroundColor: 'sub.200',
            opacity: 1,
          }}
          borderRadius="full"
          fontSize={{ md: 'xl' }}
          fontWeight={'bold'}
        >
          <Box
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
            gap={{ base: '10px', md: 6 }}
          >
            <Box as="span">TOPページに戻る</Box>
            <AngleRightIcon />
          </Box>
        </BaseLink>
      </Box>
    </Box>
  );
};
