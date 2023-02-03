import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';

export const BLOG_PER_PAGE = 5;

export type BlogItemProps = {
  title: string;
  content: string;
  description: string;
  publishedAt: string;
  image: {
    url: string;
  };
  eyecatch: HTMLImageElement;
  category: MicroCMSDate & BlogCategoryDataProps;
};

export type BlogContentProps = BlogItemProps & MicroCMSContentId & MicroCMSDate;

export type BlogCategoryDataProps = {
  id: string;
  name: string;
};

export type BlogDataProps = MicroCMSListResponse<BlogItemProps>;
