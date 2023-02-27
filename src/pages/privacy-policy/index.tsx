import { PrivacyPolicySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META } from 'configs';
import { PrivacyPolicyMain } from 'features/privacy-policy';
import type { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
  return (
    <MainLayout meta={META.PrivacyPolicy}>
      <PrivacyPolicySubVisual />
      <PrivacyPolicyMain />
    </MainLayout>
  );
};

export default PrivacyPolicy;
