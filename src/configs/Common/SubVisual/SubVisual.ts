export type SubVisualItemProps = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  image: {
    pc: string;
    sp: string;
  };
};

type SubVisualListProps = {
  [key: string]: SubVisualItemProps;
};

export const SUB_VISUAL_LIST: SubVisualListProps = {
  news: {
    title: 'News',
    text1: '当社の取り組みや',
    text2: '最新のニュースについて',
    text3: 'お知らせいたします。',
    image: {
      pc: '/images/news/news_sub-visual_pc.jpg',
      sp: '/images/news/news_sub-visual_sp.jpg',
    },
  },
  recruit: {
    title: 'Recruit',
    text1: '我々と一緒に世界一の',
    text2: 'ESGプラットフォーマーを',
    text3: '目指す仲間を募集しております。',
    image: {
      pc: '/images/recruit/recruit_sub-visual_pc.jpg',
      sp: '/images/recruit/recruit_sub-visual_sp.jpg',
    },
  },
  contact: {
    title: 'Contact',
    text1: '株式会社Scrumyやサービスに',
    text2: '関するお問い合わせは',
    text3: '以下のフォームよりお願いいたします。',
    image: {
      pc: '/images/contact/contact_sub-visual_pc.jpg',
      sp: '/images/contact/contact_sub-visual_sp.jpg',
    },
  },
};
