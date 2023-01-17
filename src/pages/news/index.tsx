import { ContactBlock, PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { NewsMain } from 'features/news';
import type { NextPage } from 'next';
import { generateNewsIndex } from 'pages/api/algolia/generateIndex';

const News: NextPage = () => {
  return (
    <MainLayout meta={META.news}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.news} />
      <NewsMain />
      <ContactBlock />
    </MainLayout>
  );
};

export const getNewsStaticProps = async () => {
  await generateNewsIndex();
  return {
    props: {},
  };
};

export default News;
