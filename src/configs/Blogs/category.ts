export type BlogCategoryProps = {
  text: string;
  image: string;
  slug: string;
};

type BlogCategoriesProps = {
  [key: string]: BlogCategoryProps;
};

export const BLOG_CATEGORIES: BlogCategoriesProps = {
  all: {
    text: 'All',
    image: '',
    slug: '',
  },
  esgsdgs: {
    text: 'ESG・SDGsとは？',
    image: '/images/root/blog1.png',
    slug: 'esg-sdgs',
  },
  sustainable: {
    text: 'サステナブル経営',
    image: '/images/root/blog2.png',
    slug: 'sustainable',
  },
  esginvestment: {
    text: 'ESG投資',
    image: '/images/root/blog3.png',
    slug: 'esginvestment',
  },
};
