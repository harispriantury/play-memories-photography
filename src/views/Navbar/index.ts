interface INavList {
  name: string;
  url: string;
}

const navList: INavList[] = [
  {
    name: 'HOME',
    url: '/',
  },
  {
    name: 'PRICING',
    url: '/pricing',
  },
  {
    name: 'GALLERY',
    url: '/gallery',
  },
  {
    name: 'I AM PHOTOGRAPHER',
    url: '/about-me',
  },
];

export { navList };
