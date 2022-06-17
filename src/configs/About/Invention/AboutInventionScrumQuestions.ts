export type AboutInventionScrumQuestionProps = {
  term: string;
  description: string[];
};

type AboutInventionScrumQuestionsProps = AboutInventionScrumQuestionProps[];

export const ABOUT_INVENTION_SCRUM_QUESTIONS: AboutInventionScrumQuestionsProps =
  [
    {
      term: 'スクラム申請はどこまで対応できますか？',
      description: [
        '定款認証から登記申請まで会社設立に必要な手続きがワンストップでできます。今後は設立後に必要な手続きも随時対応していく予定です。なお、法人形態につきましては一般的な株式会社のみに対応しています。詳しい区分につきましては、「お問い合わせ」にていつでもご相談ください。随時他の法人形態にも対応していく予定です。',
      ],
    },
    {
      term: '登記の申請代行は可能でしょうか？',
      description: [
        '定款認証・登記申請自体はお客様自身で行っていただく必要がございます。また、ご自身での申請のお負担を最小限にできる、「らくらくお任せプラン」のご用意もございますのでぜひご利用くださいませ。',
        'なお、法務局から訂正の指摘があった場合や登記が受理されなかった場合には、利用料金を全額返金いたします。ただし、本サービスの利用が正しく行われなかった場合は対象外となる場合もございます。',
      ],
    },
    {
      term: '電子定款の場合、利用環境の制約はありますか？',
      description: [
        '「申請用総合ソフト」のダウンロードの推奨環境がWindows8.1/10となっております。あらかじめご確認の上、定款の種類をご選択ください。',
      ],
    },
  ];
