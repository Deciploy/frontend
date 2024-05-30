import { AiFillEye } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

import { ProtectedRoute } from '../../app/view/common/ProtectedRoute';
import LoginPage from '../../app/view/pages/auth/LoginPage';
import HomePage from '../../app/view/pages/home/HomePage';
import ScreenshotsPage from '../../app/view/pages/screenshot/ScreenshotsPage';
import TeamPage from '../../app/view/pages/team/TeamPage';
import UserPage from '../../app/view/pages/user/UserPage';
import { AppRoute } from './interface';

export const routeNames = {
  home: '/',
  login: '/login',
  sample: '/sample',
  team: '/team',
  user: '/user',
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
      path: '/Screenshots',
      Component: ScreenshotsPage,
      title: 'Screenshots',
      Icon: AiFillEye,
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
      path: routeNames.user,
      Component: () => (
        <ProtectedRoute>
          <UserPage />
        </ProtectedRoute>
      ),
      title: 'User',
      Icon: FaUser,
    },
  ],
};
