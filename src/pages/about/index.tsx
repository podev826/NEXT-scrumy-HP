import { AboutSubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META } from 'configs';
import { AboutCompany, AboutMember, AboutSpacer } from 'features/about';
import { AboutBusiness } from 'features/about/Business';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <MainLayout meta={META.about}>
      <AboutSubVisual />
      <AboutBusiness />
      <AboutSpacer />
      <AboutMember />
      <AboutCompany />
    </MainLayout>
  );
};

export default About;
