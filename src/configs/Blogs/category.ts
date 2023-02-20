export type BlogCategoryProps = {
  text: string;
  name: string;
  image: string;
  slug: string;
};

type BlogCategoriesProps = {
  [key: string]: BlogCategoryProps;
};

export const BLOG_CATEGORIES: BlogCategoriesProps = {
  all: {
    text: '',
    name: 'All',
    image: '',
    slug: '',
  },
  esgsdgs: {
    text: 'ESG／SDGsとは？',
    name: 'ESG／SDGsとは？',
    image: '/images/root/blog1.png',
    slug: '8a_cl5gq5dy',
    // slug: 'esg-sdgs',
  },
  sustainable: {
    text: 'サステナブル経営',
    name: 'サステナブル経営',
    image: '/images/root/blog2.png',
    slug: '3kjcv5uy5l',
    // slug: 'sustainable',
  },
  esginvestment: {
    text: 'ESG投資',
    name: 'ESG投資',
    image: '/images/root/blog3.png',
    slug: 'ad_du_l5jb',
    // slug: 'esginvestment',
  },
};
