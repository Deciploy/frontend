import { AppRoute } from './interface';

import LoginPage from '../../app/view/pages/auth/LoginPage';
import HomePage from '../../app/view/pages/home/HomePage';
import SamplePage from '../../app/view/pages/sample/SamplePage';

import { MdDashboard } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';

export const appRoutes: AppRoute = {
  routes: [
    {
      path: '/login',
      Component: LoginPage,
    },
  ],
  menuRoutes: [
    {
      index: true,
      Component: HomePage,
      title: 'Home',
      Icon: MdDashboard,
    },
    {
      path: 'sample',
      Component: SamplePage,
      title: 'Sample',
      Icon: AiFillEye,
    },
  ],
};
