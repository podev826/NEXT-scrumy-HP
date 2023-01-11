export type BlogsCategoryProps = {
  text: string;
  slug: string;
};

type BlogsCategoriesProps = {
  [key: string]: BlogsCategoryProps;
};

export const BLOGS_CATEGORIES: BlogsCategoriesProps = {
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
