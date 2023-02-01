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
    text: 'ピッチ・メディア',
    name: 'ピッチ・メディア',
  },
  fundraising: {
    text: '資金調達',
    name: '資金調達',
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
