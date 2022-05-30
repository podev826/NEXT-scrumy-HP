import { MicroCMSDate, MicroCMSListResponse } from 'microcms-js-sdk';

export const NEWS_PER_PAGE = 5;

export type NewsCategoryProps =
  | 'すべて'
  | 'お知らせ'
  | 'プレスリリース'
  | 'セミナー'
  | 'eBOOK';

export type NewsContentProps = {
  title: string;
  category: MicroCMSDate & NewsCategoryDataProps;
  content: string;
};

export type NewsCategoryDataProps = {
  id: string;
  name: string;
};

export type NewsDataProps = MicroCMSListResponse<NewsContentProps> & {
  name?: string;
};
