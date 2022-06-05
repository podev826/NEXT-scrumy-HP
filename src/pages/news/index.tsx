import { ContactBlock, PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { NewsMain } from 'features/news';
import { generateIndex } from 'libraries/algolia';
import type { NextPage } from 'next';

const News: NextPage = () => {
  return (
    <MainLayout meta={META.news}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.news} />
      <NewsMain />
      <ContactBlock />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  await generateIndex();
  return {
    props: {},
  };
};

export default News;
