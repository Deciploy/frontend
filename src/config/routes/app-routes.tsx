import { AppRoute } from './interface';

import LoginPage from '../../app/view/pages/auth/LoginPage';
import HomePage from '../../app/view/pages/home/HomePage';
import SamplePage from '../../app/view/pages/sample/SamplePage';
import TeamPage from '../../app/view/pages/team/TeamPage';

import { MdDashboard } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';

import { ProtectedRoute } from '../../app/view/common/ProtectedRoute';


export const routeNames = {
  home: '/',
  login: '/login',
  sample: '/sample',
  team: '/team'
};

export const appRoutes: AppRoute = {
  routes: [
    {
      path: routeNames.login,
      Component: LoginPage,
    },
  ],
  menuRoutes: [
    {
      index: true,
      Component: () => (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
      title: 'Home',
      Icon: MdDashboard,
    },
    {
      path: routeNames.team,
      Component: () => (
        <ProtectedRoute>
          <TeamPage />
        </ProtectedRoute>
      ),
      title: 'Team',
      Icon: FaUsers,
    },
    {
      path: routeNames.sample,
      Component: () => (
        <ProtectedRoute>
          <SamplePage />
        </ProtectedRoute>
      ),
      title: 'Sample',
      Icon: AiFillEye,
    },
  ],
};
