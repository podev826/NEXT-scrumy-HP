import algoliasearch from 'algoliasearch';
import { getAllContents } from 'libraries/microcms';

export const generateIndex = async (): Promise<void> => {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
    process.env.ALGOLIA_ADMIN_API_KEY as string
  );
  const posts = await getAllContents();

  const objects = posts.map((post: any) => {
    return {
      objectID: post.id,
      publishedAt: post.publishedAt,
      title: post.title,
      category: post.category.id,
      content: post.content,
    };
  });

  const index = client.initIndex('news');
  process.env.NODE_ENV === 'production' &&
    (await index.saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    }));
};
