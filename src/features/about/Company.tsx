import { PrimaryTitle } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const AboutCompany: FC = () => {
  return (
    <ContentWrapper as="section" bgType="gray">
      <PrimaryTitle ja="企業情報" en="Company" />
    </ContentWrapper>
  );
};
