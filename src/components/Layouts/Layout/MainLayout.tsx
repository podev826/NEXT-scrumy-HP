import { Footer } from 'components/Layouts/Footer';
import { MainHead } from 'components/Layouts/Head';
import { Header } from 'components/Layouts/Header';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { MetaItemProps } from 'types';

type MainLayoutProps = {
  meta: MetaItemProps | null;
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ meta, children }) => {
  return (
    <>
      {meta ? (
        <MainHead meta={meta} />
      ) : (
        <Head>
          <title>404 Not Found | 株式会社Scrumy</title>
        </Head>
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
