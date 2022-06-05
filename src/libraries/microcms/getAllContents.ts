import { client } from './client';

export const getAllContents = async (limit = 10, offset = 0): Promise<any> => {
  const data = await client.get({
    endpoint: 'news',
    queries: { limit, offset },
  });

  if (data.offset + data.limit < data.totalCount) {
    const contents = await getAllContents(data.limit, data.offset + data.limit);
    return [...data.contents, ...contents];
  }

  return data.contents;
};
