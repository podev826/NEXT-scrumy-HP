import { MicroCMSDate, MicroCMSListResponse } from 'microcms-js-sdk';

type NewsCategoryChangeJaProps = {
  [key: string]: string;
};

export const NEWS_CATEGORY_CHANGE_JA: NewsCategoryChangeJaProps = {
  information: 'お知らせ',
  'press-release': 'プレスリリース',
  seminar: 'セミナー',
  'e-book': 'eBOOK',
};

export const NEWS_PER_PAGE = 5;

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
