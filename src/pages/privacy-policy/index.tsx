import { PrivacyPolicySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { PrivacyPolicyMain } from 'features/privacy-policy';
import type { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
  return (
    <MainLayout>
      <PrivacyPolicySubVisual />
      <PrivacyPolicyMain />
    </MainLayout>
  );
};

export default PrivacyPolicy;
