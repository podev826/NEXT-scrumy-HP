export type SecondaryNavContentDetailProps = {
  text: string;
  href: string;
  blank?: boolean;
};

export type SecondaryNavContentProps = {
  title: string;
  href: string;
  list: SecondaryNavContentDetailProps[];
};

export type SecondaryNavProps = {
  [key: string]: SecondaryNavContentProps;
};

export const SECONDARY_NAV: SecondaryNavProps = {
  top: {
    title: 'Top',
    href: '/',
    list: [
      {
        text: '事業について',
        href: '/#service',
      },
      {
        text: 'お知らせ',
        href: '/#news',
      },
      {
        text: '採用について',
        href: '/#recruit',
      },
      {
        text: 'お問い合わせ',
        href: '/#contact',
      },
    ],
  },
  about: {
    title: 'About us',
    href: '/about',
    list: [
      {
        text: '開発事例',
        href: '/about/#invention',
      },
      {
        text: '代表メッセージ',
        href: '/about/#message',
      },
      {
        text: '企業情報',
        href: '/about/#company',
      },
    ],
  },
  service: {
    title: 'Service',
    href: '/#service',
    list: [
      {
        text: '法人データストレージ「Scrumy」',
        href: '/#service01',
      },
      {
        text: '会社設立サポート「スクラム申請」',
        href: '/#service02',
      },
      {
        text: '情報セキュリティ診断サービス',
        href: '/#service03',
      },
    ],
  },
  news: {
    title: 'News',
    href: '/news',
    list: [
      {
        text: 'お知らせ',
        href: '/news/#news',
      },
    ],
  },
  recruit: {
    title: 'Join us',
    href: '/recruit',
    list: [
      {
        text: '募集要項',
        href: '/recruit/#recruit',
      },
      {
        text: 'メンバー',
        href: '/recruit/#member',
      },
    ],
  },
  privacyPolicy: {
    title: 'privacy policy',
    href: '/privacy-policy',
    list: [],
  },
};
