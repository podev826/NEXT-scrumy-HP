import { BlogContentProps, NewsContentProps } from 'types';

import { Blogclient, Newsclient } from './client';

export const NewsgetAllContents = async (
  limit = 10,
  offset = 0
): Promise<NewsContentProps[]> => {
  const data = await Newsclient.get({
    endpoint: 'news',
    queries: { limit, offset },
  });

  if (data.offset + data.limit < data.totalCount) {
    const contents = await NewsgetAllContents(
      data.limit,
      data.offset + data.limit
    );

    return [...data.contents, ...contents];
  }

  return data.contents;
};

export const BloggetAllContents = async (
  limit = 10,
  offset = 0
): Promise<BlogContentProps[]> => {
  const data = await Blogclient.get({
    endpoint: 'blogs',
    queries: { limit, offset },
  });

  if (data.offset + data.limit < data.totalCount) {
    const contents = await BloggetAllContents(
      data.limit,
      data.offset + data.limit
    );

    return [...data.contents, ...contents];
  }

  return data.contents;
};
