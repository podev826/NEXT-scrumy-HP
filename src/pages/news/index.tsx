import { NewsAll } from 'features/news/All';
import { client } from 'libraries/microcms';
import type { GetStaticProps, NextPage } from 'next';
import { NewsContentProps, NewsDataProps } from 'types/News';

const News: NextPage<NewsDataProps> = ({
  contents,
  totalCount,
  name = 'all',
}) => {
  return <NewsAll contents={contents} totalCount={totalCount} name={name} />;
};

export const getStaticProps: GetStaticProps<NewsDataProps> = async () => {
  const data = await client
    .getList<NewsContentProps>({
      endpoint: 'news',
      queries: { limit: 9999, orders: '-publishedAt' },
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

export default News;
