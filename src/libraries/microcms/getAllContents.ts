import { NewsContentProps } from 'types';

import { Newsclient } from './client';

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
