type AboutInventionScrumFeatureProps = {
  title: string;
  list: string[];
  text?: string;
  image?: string;
};

type AboutInventionScrumFeaturesProps = AboutInventionScrumFeatureProps[];

export const ABOUT_INVENTION_SCRUM_FEATURES: AboutInventionScrumFeaturesProps =
  [
    {
      title: '最小限の入力で提出書類を簡単作成',
      list: ['専門用語解説付き', '簡単な質問に答えるだけ', 'サポート充実！'],
      text: '手続きにかかる手間を徹底的に削減いたしました。',
    },
    {
      title: 'スピードは10倍に、コストは1/10に',
      list: ['最短1日で手続き完了！', '費用は10,000円〜利用可能。'],
    },
    {
      title: '圧倒的な操作のしやすさ',
      list: ['分かりやすい画面デザインと二度手間を徹底的に減らした操作性。'],
    },
  ];
