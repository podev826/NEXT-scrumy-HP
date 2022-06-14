export type NewsCategoryProps = {
  text: string;
  slug: string;
};

type NewsCategoriesProps = {
  [key: string]: NewsCategoryProps;
};

export const NEWS_CATEGORIES: NewsCategoriesProps = {
  all: {
    text: 'All',
    slug: '',
  },
  information: {
    text: 'お知らせ',
    slug: 'information',
  },
  pressRelease: {
    text: 'プレスリリース',
    slug: 'press-release',
  },
  seminar: {
    text: 'セミナー',
    slug: 'seminar',
  },
  eBook: {
    text: 'eBOOK',
    slug: 'e-book',
  },
};
