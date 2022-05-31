type NewsCategoryProps = {
  text: 'All' | 'お知らせ' | 'プレスリリース' | 'セミナー' | 'eBOOK';
  lang: 'ja' | 'en';
  name: string;
  href: string;
};

type NewsCategoriesProps = NewsCategoryProps[];

export const NEWS_CATEGORIES: NewsCategoriesProps = [
  {
    text: 'All',
    lang: 'en',
    name: 'all',
    href: '/news#news',
  },
  {
    text: 'お知らせ',
    lang: 'ja',
    name: 'information',
    href: '/news/category/information#news',
  },
  {
    text: 'プレスリリース',
    lang: 'ja',
    name: 'press-release',
    href: '/news/category/press-release#news',
  },
  {
    text: 'セミナー',
    lang: 'ja',
    name: 'seminar',
    href: '/news/category/seminar#news',
  },
  {
    text: 'eBOOK',
    lang: 'en',
    name: 'e-book',
    href: '/news/category/e-book#news',
  },
];
