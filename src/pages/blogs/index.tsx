import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { BlogsMain } from 'features/Blogs';
import type { NextPage } from 'next';
import { generateIndex } from 'pages/api/algolia/generateIndex';

const Media: NextPage = () => {
  return (
    <MainLayout meta={META.news}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.media} />
      <BlogsMain />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  await generateIndex();
  return {
    props: {},
  };
};

export default Media;
