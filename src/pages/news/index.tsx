import { ContactBlock, PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { SUB_VISUAL_LIST } from 'configs';
import { NewsMain } from 'features/news';
import type { NextPage } from 'next';

const News: NextPage = () => {
  return (
    <MainLayout>
      <PrimarySubVisual content={SUB_VISUAL_LIST.news} />
      <NewsMain />
      <ContactBlock />
    </MainLayout>
  );
};

export default News;
