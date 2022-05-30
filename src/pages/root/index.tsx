import { ContactBlock } from 'components/Elements';
import { IdWrapper, MainLayout } from 'components/Layouts';
import {
  RootHero,
  RootNews,
  RootPickup,
  RootRecruit,
  RootService,
} from 'features/root';
import { client } from 'libraries/microcms';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import type { GetStaticProps, NextPage } from 'next';
import { NewsContentProps, NewsDataProps } from 'types';

type RootProps = {
  contents: (NewsContentProps & MicroCMSContentId & MicroCMSDate)[];
};

const Root: NextPage<RootProps> = ({ contents }) => {
  return (
    <MainLayout>
      <RootHero />
      <RootPickup />
      <RootService />
      <RootNews contents={contents} />
      <RootRecruit />
      <IdWrapper id="contact">
        <ContactBlock />
      </IdWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<NewsDataProps> = async () => {
  const data = await client
    .getList<NewsContentProps>({
      endpoint: 'news',
      queries: { limit: 3, orders: '-publishedAt' },
    })
    .catch(() => null);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

export default Root;
