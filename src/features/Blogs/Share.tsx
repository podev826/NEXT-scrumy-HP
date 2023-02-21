import { Box, Button, Link, Text } from '@chakra-ui/react';
import { FadeInAnimation } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { BlogItemProps } from 'types';

type blogType = {
  blog: BlogItemProps;
};

export const BlogsShare: FC<blogType> = ({ blog }) => {
  const router = useRouter();
  const [display, setDisplay] = useState<boolean>(false);
  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(
      blog.title + 'https://www.scrumy.co.jp' + router.asPath
    );
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  };
  return (
    <ContentWrapper
      as="section"
      mx={{ base: '10', xl: '0' }}
      ml={{ base: '', xl: '30' }}
      w={{ base: '', xl: '65vw' }}
      py="0"
      px="0"
    >
      <Box textAlign={'center'} maxW="1000px" mx="auto">
        <Box>
          <Text>シェアする</Text>
        </Box>
        <Box
          border="1px"
          borderColor="gray.800"
          borderRadius="md"
          py={7}
          w="350px"
          position={'fixed'}
          top="50%"
          left={{ base: '5%', sm: '35%' }}
          bg="gray.800"
          color="white"
          zIndex={'10'}
          display={display ? 'block' : 'none'}
        >
          <Text fontSize={'xl'}>タイトルとURLコピーしました</Text>
        </Box>
        <Box display={{ base: '', sm: 'flex' }} columnGap="7" mt="5" px="10">
          <Link
            target="_blank"
            href={
              'https://twitter.com/intent/tweet?text=' +
              blog.title +
              'https://www.scrumy.co.jp' +
              router.asPath
            }
            bg="#1DA0F1"
            color="white"
            w={{ base: '50vw', sm: '' }}
            py="2"
            fontSize={'sm'}
            shadow="xl"
            cursor={'pointer'}
          >
            Twitter
          </Link>
          <Link
            target="_blank"
            href={
              'http://www.facebook.com/share.php?u=' +
              'https://www.scrumy.co.jp' +
              router.asPath
            }
            bg="#1877F2"
            color="white"
            w={{ base: '50vw', sm: '' }}
            py="2"
            fontSize={'sm'}
            shadow="xl"
            cursor={'pointer'}
            mt={{ base: '2', sm: '0' }}
          >
            facebook
          </Link>
          <Button
            bg="#D9D9D9"
            w={{ base: '50vw', sm: '' }}
            py="2"
            fontSize={'sm'}
            shadow="xl"
            cursor={'pointer'}
            fontWeight="normal"
            borderRadius="none"
            mt={{ base: '2', sm: '0' }}
            onClick={() => copyToClipboard()}
          >
            リンクをコピー
          </Button>
        </Box>
      </Box>
    </ContentWrapper>
  );
};
