import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { ContactMain } from 'features/contact';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <MainLayout meta={META.contact}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.contact} />
      <ContactMain />
    </MainLayout>
  );
};

export default Contact;
