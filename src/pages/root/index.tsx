import { ContactBlock } from 'components/Elements';
import { IdWrapper, MainLayout } from 'components/Layouts';
import { META } from 'configs';
import {
  RootBlog,
  RootHero,
  RootMessage,
  RootNews,
  RootService,
} from 'features/root';
import { Newsclient } from 'libraries/microcms';
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

const Root: NextPage<RootProps> = ({ news }) => {
  return (
    <MainLayout meta={META.root}>
      <RootHero />
      <RootService />
      <RootNews contents={news.contents} />
      <RootMessage />
      <RootBlog />
      <IdWrapper id="contact">
        <ContactBlock />
      </IdWrapper>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<RootProps> = async () => {
  const news = await Newsclient.getList<NewsItemProps>({
    endpoint: 'news',
    queries: { limit: 3, orders: '-publishedAt' },
  }).catch(() => null);

  const pickup = await Newsclient.getList<PickupItemProps>({
    endpoint: 'pickup',
    queries: { limit: 3, orders: '-publishedAt' },
  }).catch(() => null);

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
