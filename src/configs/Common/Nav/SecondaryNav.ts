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
    list: [
      {
        text: 'Press',
        href: '/news/#news',
      },
    ],
  },
  recruit: {
    title: 'Join us',
    href: '/recruit',
    list: [
      {
        text: 'Recruit',
        href: '/recruit/#recruit',
      },
    ],
  },
  privacyPolicy: {
    title: 'privacy policy',
    href: '/privacy-policy',
    list: [],
  },
};
