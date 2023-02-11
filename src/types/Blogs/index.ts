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

  image: MicroCMSDate & BlogEyecatchDataProps;
  eyecatch: MicroCMSDate & BlogEyecatchDataProps;

  category: MicroCMSDate & BlogCategoryDataProps;
  publishedAt: string;
  objectID: string;

  id: string;
};

export type BlogEyecatchDataProps = {
  url: string;
  height: string;
  width: string;
};
export type BlogContentProps = BlogItemProps & MicroCMSContentId & MicroCMSDate;

export type BlogCategoryDataProps = {
  id: string;
  name: string;
};

export type ContentType = {
  id: string;
  category: ContentCategoryType;
};

export type ContentCategoryType = {
  id: string;
};

export type ContextType = {
  params: ContextParamsType;
};

export type ContextParamsType = {
  id: string;
  category: string;
};

export type TocType = {
  text: string;
  id: string;
  name: string;
};

export type HeadingType = {
  Element: string[];
};

export type HeadingsElementType = {
  children: childrenType;
  attribs: attribsType;
};

export type childrenType = {
  data: string;
};

export type attribsType = {
  id: string;
};

export type BlogDataProps = MicroCMSListResponse<BlogItemProps>;
