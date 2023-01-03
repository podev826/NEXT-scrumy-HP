import { AboutSubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META } from 'configs';
import { AboutCompany, AboutSpacer } from 'features/about';
import { AboutBusiness } from 'features/about/Business';
import { RecruitMember } from 'features/recruit';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <MainLayout meta={META.about}>
      <AboutSubVisual />
      <AboutBusiness />
      <AboutSpacer />
      <RecruitMember />
      <AboutCompany />
    </MainLayout>
  );
};

export default About;
