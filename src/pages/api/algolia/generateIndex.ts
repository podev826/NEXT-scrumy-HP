import algoliasearch from 'algoliasearch';
import { BloggetAllContents, NewsgetAllContents } from 'libraries/microcms';
import { BlogContentProps, NewsContentProps } from 'types';

export const generateNewsIndex = async (): Promise<void> => {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
    process.env.ALGOLIA_ADMIN_API_KEY as string
  );
  const items = await NewsgetAllContents();

  const objects = items.map((item: NewsContentProps) => {
    return {
      objectID: item.id,
      publishedAt: item.publishedAt,
      title: item.title,
      category: item.category,
      content: item.content,
    };
  });

  const index = client.initIndex('news');
  process.env.NODE_ENV === 'production' && (await index.clearObjects());
  process.env.NODE_ENV === 'production' &&
    (await index.saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    }));
};

export const generateBlogIndex = async (): Promise<void> => {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
    process.env.ALGOLIA_ADMIN_API_KEY as string
  );
  const items = await BloggetAllContents();

  const objects = items.map((item: BlogContentProps) => {
    return {
      objectID: item.id,
      publishedAt: item.publishedAt,
      title: item.title,
      category: item.category,
      content: item.content,
    };
  });

  const index = client.initIndex('blog');
  process.env.NODE_ENV === 'production' && (await index.clearObjects());
  process.env.NODE_ENV === 'production' &&
    (await index.saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    }));
};
