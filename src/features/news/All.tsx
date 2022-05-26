import { ContactBlock, PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { SUB_VISUAL_LIST } from 'configs';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { FC } from 'react';
import { NewsContentProps } from 'types/News';

import { NewsMain } from './Main';

type NewsAllProps = {
  contents: (NewsContentProps & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
  name: string;
};

export const NewsAll: FC<NewsAllProps> = ({ contents, totalCount, name }) => {
  return (
    <MainLayout>
      <PrimarySubVisual content={SUB_VISUAL_LIST.news} />
      <NewsMain contents={contents} totalCount={totalCount} name={name} />
      <ContactBlock />
    </MainLayout>
  );
};
