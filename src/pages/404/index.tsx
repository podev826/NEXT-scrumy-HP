import { MainLayout } from 'components/Layouts';
import { NotFoundMain } from 'features/404';
import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <MainLayout>
      <NotFoundMain />
    </MainLayout>
  );
};

export default NotFound;
