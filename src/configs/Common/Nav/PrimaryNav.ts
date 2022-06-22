export type PrimaryNavContentProps = {
  href: string;
  text: string;
};

export type PrimaryNavProps = PrimaryNavContentProps[];

export const PRIMARY_NAV: PrimaryNavProps = [
  {
    href: '/about',
    text: 'About us',
  },
  {
    href: '/#service',
    text: 'Service',
  },
  {
    href: '/news',
    text: 'News',
  },
  {
    href: '/recruit',
    text: 'Join us',
  },
];
