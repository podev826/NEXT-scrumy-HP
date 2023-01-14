export type PrimaryNavContentProps = {
  href: string;
  text: string;
  scroll?: string;
};

export type PrimaryNavProps = PrimaryNavContentProps[];

export const PRIMARY_NAV: PrimaryNavProps = [
  {
    href: '/about',
    text: 'About us',
  },
  {
    href: '/news',
    text: 'News',
  },
  {
    href: '/recruit',
    text: 'Recruit',
  },
  {
    href: '/media',
    text: 'Media',
  },
];
