import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import type { NextPage } from 'next';

const Media: NextPage = () => {
  return (
    <MainLayout meta={META.news}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.media} />
    </MainLayout>
  );
};

export default Media;
