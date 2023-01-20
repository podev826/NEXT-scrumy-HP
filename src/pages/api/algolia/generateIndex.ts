import algoliasearch from 'algoliasearch';
import { NewsgetAllContents } from 'libraries/microcms';
import { NewsContentProps } from 'types';

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
