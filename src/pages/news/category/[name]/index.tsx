import { NewsAll } from 'features/news/All';
import { client } from 'libraries/microcms';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NewsContentProps, NewsDataProps } from 'types/News';

const NewsCategory: NextPage<NewsDataProps> = ({
  contents,
  totalCount,
  name = 'all',
}) => {
  return (
    <>
      <NewsAll contents={contents} totalCount={totalCount} name={name} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const data = await client
    .getList({ endpoint: 'news-category' })
    .catch(() => null);

  if (!data) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.contents.map((content) => {
    return { params: { name: content.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  NewsDataProps,
  { name: string }
> = async (context) => {
  const name = context.params?.name;

  const data = await client
    .getList<NewsContentProps>({
      endpoint: 'news',
      queries: {
        limit: 9999,
        filters: `category[equals]${name}`,
        orders: '-publishedAt',
      },
    })
    .catch(() => null);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data, name },
  };
};

export default NewsCategory;
