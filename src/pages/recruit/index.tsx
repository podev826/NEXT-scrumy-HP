import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { SUB_VISUAL_LIST } from 'configs';
import { RecruitMain, RecruitTop } from 'features/recruit';
import type { NextPage } from 'next';

const Recruit: NextPage = () => {
  return (
    <MainLayout>
      <PrimarySubVisual content={SUB_VISUAL_LIST.recruit} />
      <RecruitTop />
      <RecruitMain />
    </MainLayout>
  );
};

export default Recruit;
