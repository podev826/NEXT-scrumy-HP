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
    text: 'ピッチ・メディア',
    slug: 'pitch_media',
  },
  pressRelease: {
    text: '資金調達',
    slug: 'fundraising',
  },
  seminar: {
    text: 'セミナー・教育',
    slug: 'seminar_edu',
  },
  eBook: {
    text: '研究・政策提言',
    slug: 'research_pp',
  },
};
