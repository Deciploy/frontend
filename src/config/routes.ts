import { RouteObject } from 'react-router-dom';

import HomePage from '../app/view/pages/home/HomePage';
import LoginPage from '../app/view/pages/auth/LoginPage';

export const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/',
    Component: HomePage,
  },
];
