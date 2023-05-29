export interface Page {
  name: string;
  destination: string;
}

export const menuButtons: Page[] = [
  {
    name: 'Página Inicial',
    destination: '/',
  },
  {
    name: 'Usuários',
    destination: '/Users',
  },
];

export const userButtons: Page[] = [
  {
    name: 'Ver Perfil',
    destination: '/Profile',
  },
  {
    name: 'Sair',
    destination: '/Logout',
  },
];
