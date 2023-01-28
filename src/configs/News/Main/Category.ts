export type NewsCategoryProps = {
  text: string;
  name: string;
  slug: string;
};

type NewsCategoriesProps = {
  [key: string]: NewsCategoryProps;
};

export const NEWS_CATEGORIES: NewsCategoriesProps = {
  all: {
    text: '',
    name: 'All',
    slug: '',
  },
  pitch_media: {
    text: 'ピッチ・メディア',
    name: 'ピッチ・メディア',
    slug: '7hi9h4pyw',
  },
  fundraising: {
    text: '資金調達',
    name: '資金調達',
    slug: 'rp-ptmn4vb',
  },
  seminar_edu: {
    text: 'セミナー・教育',
    name: 'セミナー・教育',
    slug: 'y5vc_5ldu',
  },
  research_pp: {
    text: '研究・政策提言',
    name: '研究・政策提言',
    slug: 'z6i3xhl24ew3',
  },
};
