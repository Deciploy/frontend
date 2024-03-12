import { AiFillEye } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';

import { ProtectedRoute } from '../../app/view/common/ProtectedRoute';
import LoginPage from '../../app/view/pages/auth/LoginPage';
import HomePage from '../../app/view/pages/home/HomePage';
import InsightsPage from '../../app/view/pages/home/InsightsPage';
import SamplePage from '../../app/view/pages/sample/SamplePage';
import TeamPage from '../../app/view/pages/team/TeamPage';
import { AppRoute } from './interface';

export const routeNames = {
  home: '/',
  login: '/login',
  sample: '/sample',
  team: '/team',
  insights: '/insights',
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
    {
      path: routeNames.insights,
      Component: () => (
        <ProtectedRoute>
          <InsightsPage />
        </ProtectedRoute>
      ),
      title: 'Insights',
      Icon: FaChartLine,
    },
  ],
};
