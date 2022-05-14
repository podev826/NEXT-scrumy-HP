import { Footer } from 'components/Layouts/Footer';
import { MainHead } from 'components/Layouts/Head';
import { Header } from 'components/Layouts/Header';
import { FC, ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHead />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
