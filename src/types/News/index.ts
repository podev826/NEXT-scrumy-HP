import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';

export const NEWS_PER_PAGE = 5;

export type NewsItemProps = {
  title: string;
  category: MicroCMSDate & NewsCategoryDataProps;
  content: string;
};

export type NewsContentProps = NewsItemProps & MicroCMSContentId & MicroCMSDate;

export type NewsCategoryDataProps = {
  id: string;
  name: string;
};

export type NewsDataProps = MicroCMSListResponse<NewsItemProps>;
