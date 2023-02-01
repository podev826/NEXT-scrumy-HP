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
    text: 'SDGs／ESGとは？',
    name: 'SDGs／ESGとは？',
    image: '/images/root/blog1.png',
    slug: 'esg-sdgs',
  },
  sustainable: {
    text: 'サステナブル経営',
    name: 'サステナブル経営',
    image: '/images/root/blog2.png',
    slug: 'sustainable',
  },
  esginvestment: {
    text: 'ESG投資',
    name: 'ESG投資',
    image: '/images/root/blog3.png',
    slug: 'esginvestment',
  },
};
