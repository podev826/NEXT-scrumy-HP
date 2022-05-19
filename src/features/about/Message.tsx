import { PrimaryTitle } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const AboutMessage: FC = () => {
  return (
    <ContentWrapper as="section" bgType="dotted">
      <PrimaryTitle ja="代表メッセージ" en="Message" />
    </ContentWrapper>
  );
};
