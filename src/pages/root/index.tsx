import { ContactBlock } from 'components/Elements';
import { IdWrapper, MainLayout } from 'components/Layouts';
import { META } from 'configs';
import {
  RootHero,
  RootMessage,
  RootNews,
  RootPickup,
  RootService,
} from 'features/root';
import { client } from 'libraries/microcms';
import type { GetStaticProps, NextPage } from 'next';
import {
  NewsDataProps,
  NewsItemProps,
  PickupDataProps,
  PickupItemProps,
} from 'types';

type RootProps = {
  news: NewsDataProps;
  pickup: PickupDataProps;
};

const Root: NextPage<RootProps> = ({ news, pickup }) => {
  return (
    <MainLayout meta={META.root}>
      <RootHero />
      <RootService />
      <RootNews contents={news.contents} />
      <RootMessage />
      <RootPickup contents={pickup.contents} />
      <IdWrapper id="contact">
        <ContactBlock />
      </IdWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<RootProps> = async () => {
  const news = await client
    .getList<NewsItemProps>({
      endpoint: 'news',
      queries: { limit: 3, orders: '-publishedAt' },
    })
    .catch(() => null);

  const pickup = await client
    .getList<PickupItemProps>({
      endpoint: 'pickup',
      queries: { limit: 3, orders: '-publishedAt' },
    })
    .catch(() => null);

  if (!news || !pickup) {
    return {
      notFound: true,
    };
  }

  return {
    props: { news, pickup },
  };
};

export default Root;
