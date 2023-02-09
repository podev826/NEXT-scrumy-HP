export type SubVisualItemProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
};

type SubVisualListProps = {
  [key: string]: SubVisualItemProps;
};

export const SUB_VISUAL_LIST: SubVisualListProps = {
  news: {
    title: 'News',
    text1: '当社の取り組みや',
    text2: '最新のニュースについて',
    text3: 'お知らせいたします',
  },
  recruit: {
    title: 'Recruit',
    text1: '世界一のESGネットワークに',
    text2: '携わってくれる',
    text3: '仲間を募集しております',
  },
  contact: {
    title: 'Contact',
    text1: '株式会社Scrumyやサービスに',
    text2: '関するお問い合わせは',
    text3: '以下のフォームよりお願いいたします',
  },
};
