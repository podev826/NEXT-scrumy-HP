export type BlogCategoryProps = {
  text: string;
  slug: string;
};

type BlogCategoriesProps = {
  [key: string]: BlogCategoryProps;
};

export const BLOG_CATEGORIES: BlogCategoriesProps = {
  all: {
    text: 'All',
    slug: '',
  },
  esgsdgs: {
    text: 'ESG・SDGsとは？',
    slug: 'esg-sdgs',
  },
  sustainable: {
    text: 'サステナブル経営',
    slug: 'sustainable',
  },
  esginvestment: {
    text: 'ESG投資',
    slug: 'esginvestment',
  },
};
