export type NewsCategoryProps = {
  text: string;
  name: string;
};

type NewsCategoriesProps = {
  [key: string]: NewsCategoryProps;
};

export const NEWS_CATEGORIES: NewsCategoriesProps = {
  all: {
    text: '',
    name: 'All',
  },
  pitch_media: {
    text: 'メディア',
    name: 'メディア',
  },
  fundraising: {
    text: '経営情報',
    name: '経営情報',
  },
  seminar_edu: {
    text: 'セミナー・教育',
    name: 'セミナー・教育',
  },
  research_pp: {
    text: '研究・政策提言',
    name: '研究・政策提言',
  },
};
