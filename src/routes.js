import History from './pages/History';
import Main from './pages/Main';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/main',
    name: 'Главная',
    component: Main,
    isPrivate: false,
  },
  {
    isNavBar: true,
    path: '/history',
    name: 'История',
    component: History,
    isPrivate: false,
  },
];
