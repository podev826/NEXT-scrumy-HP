import { AboutSubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META } from 'configs';
import {
  AboutCompany,
  AboutInvention,
  AboutMessage,
  AboutSpacer,
} from 'features/about';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <MainLayout meta={META.about}>
      <AboutSubVisual />
      <AboutInvention />
      <AboutMessage />
      <AboutSpacer />
      <AboutCompany />
    </MainLayout>
  );
};

export default About;
