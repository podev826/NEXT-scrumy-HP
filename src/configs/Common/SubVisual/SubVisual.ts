export type SubVisualItemProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
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
    text4: '',
  },
  recruit: {
    title: 'Recruit',
    text1: '世界一のESGネットワークに',
    text2: '携わってくれる',
    text3: '仲間を募集しております',
    text4: '',
  },
  contact: {
    title: 'Contact',
    text1: '株式会社Scrumyや',
    text2: 'サービスに関するお問い合わせは',
    text3: '以下のフォームより',
    text4: 'お願いいたします',
  },
  // blog: {
  //   title: 'Scrumy Media',
  //   text1: '',
  //   text2: '',
  //   text3: '',
  //   text4: '',
  // },
};
