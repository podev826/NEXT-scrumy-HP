export type SubVisualItemProps = {
  title: string;
  text: string;
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
    text: '当社の取り組みや最新のニュースについてお知らせいたします。',
    image: {
      pc: '/images/news/news_sub-visual_pc.jpg',
      sp: '/images/news/news_sub-visual_sp.jpg',
    },
  },
  recruit: {
    title: 'Recruit',
    text: '「変わっててようこそ」をモットーに、SDGs時代の社会基盤を作り上げてくれる仲間を募集しております。',
    image: {
      pc: '/images/recruit/recruit_sub-visual_pc.jpg',
      sp: '/images/recruit/recruit_sub-visual_sp.jpg',
    },
  },
  contact: {
    title: 'Contact',
    text: '株式会社Scrumyやサービスに関するお問い合わせはフォームよりお問い合わせください。',
    image: {
      pc: '/images/contact/contact_sub-visual_pc.jpg',
      sp: '/images/contact/contact_sub-visual_sp.jpg',
    },
  },
};
