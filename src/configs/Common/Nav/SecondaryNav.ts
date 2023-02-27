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
        text: 'Service',
        href: '/#service',
      },
      {
        text: 'News',
        href: '/#news',
      },
      {
        text: 'Message',
        href: '/#message',
      },
      {
        text: 'Media',
        href: '/#media',
      },
      {
        text: 'Contact',
        href: '/#contact',
      },
    ],
  },
  about: {
    title: 'About us',
    href: '/about',
    list: [
      {
        text: 'Business',
        href: '/about/#invention',
      },
      {
        text: 'Member',
        href: '/about/#message',
      },
      {
        text: 'Company',
        href: '/about/#company',
      },
    ],
  },
  news: {
    title: 'News',
    href: '/news',
    list: [],
  },
  recruit: {
    title: 'Recruit',
    href: '/recruit',
    list: [
      {
        text: 'Message',
        href: '/recruit/#message',
      },
      {
        text: 'Requirements',
        href: '/recruit/#requirements',
      },
    ],
  },
  media: {
    title: 'Media',
    href: 'https://blog-scrumy.com/', //ここを '/blogs', に変更
    list: [],
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    list: [],
  },
};
