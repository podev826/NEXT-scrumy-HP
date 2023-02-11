import { Box } from '@chakra-ui/react';
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
      <Box display={{ base: 'none', md: 'block' }}>
        <Header />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <BlogSPHeader />
      </Box>
      <main>{children}</main>
      <Footer />
    </>
  );
};
