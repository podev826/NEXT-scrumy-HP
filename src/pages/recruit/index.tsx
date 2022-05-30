import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { RecruitMain, RecruitMember, RecruitTop } from 'features/recruit';
import type { NextPage } from 'next';

const Recruit: NextPage = () => {
  return (
    <MainLayout meta={META.recruit}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.recruit} />
      <RecruitTop />
      <RecruitMain />
      <RecruitMember />
    </MainLayout>
  );
};

export default Recruit;
