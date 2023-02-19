import { Box, Flex, Text } from '@chakra-ui/react';
import { FadeInAnimation } from 'components/Elements';
import { Footer } from 'components/Layouts/Footer';
import { MainHead } from 'components/Layouts/Head';
import { BlogSPHeader, Header } from 'components/Layouts/Header';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { MetaItemProps } from 'types';

type MainLayoutProps = {
  meta?: MetaItemProps;
  children: ReactNode;
};

export const BlogMainLayout: FC<MainLayoutProps> = ({ meta, children }) => {
  return (
    <>
      {meta ? (
        <MainHead meta={meta} />
      ) : (
        <Head>
          <title>404 Not Found | 株式会社Scrumy</title>
        </Head>
      )}
      <Box display={{ base: 'none', xl: 'block' }}>
        <Header />
      </Box>
      <Box display={{ base: 'block', xl: 'none' }}>
        <BlogSPHeader />
      </Box>
      <Box display={{ base: 'none', xl: 'block' }}>
        <Box
          bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
          pt={{ base: '175px', md: '104px', xl: '120px' }}
          pb={{ base: '44px', md: '0' }}
        >
          <Box
            w="full"
            mx="auto"
            maxW={1440}
            minH={{ base: '69.333vw', md: '20vw' }}
            px={{ md: 10, lg: 16, xl: 24 }}
            display="grid"
            alignItems="stretch"
          >
            <FadeInAnimation>
              <Flex
                py={{ md: '8.333vw', '2xl': '120px' }}
                px={{ md: '5.833vw', '2xl': '84px' }}
                mx="auto"
                w="full"
              >
                <Box
                  px={{ base: '13.867vw', md: '0' }}
                  w={{
                    md: '60vw',
                  }}
                >
                  <Text
                    as="h1"
                    fontSize={{ base: '12.8vw', md: '6.111vw', '2xl': '9xl' }}
                    fontStyle="italic"
                    lang="en"
                    color="white"
                  >
                    Scrumy Media
                  </Text>
                </Box>
              </Flex>
            </FadeInAnimation>
          </Box>
        </Box>
      </Box>
      <main>{children}</main>
      <Footer />
    </>
  );
};
