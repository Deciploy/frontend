import { AiFillEye, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaChartSimple, FaGears, FaRightLeft } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';
import WeightagePage from 'src/app/view/pages/settings/weightage/WeightagePage';

import { ProtectedRoute } from '../../app/view/common/ProtectedRoute';
import LoginPage from '../../app/view/pages/auth/LoginPage';
import WorkTimePage from '../../app/view/pages/decision-support/work-time/WorkTimePage';
import HomePage from '../../app/view/pages/home/HomePage';
import InsightsPage from '../../app/view/pages/insights/InsightsPage';
import ScreenshotsPage from '../../app/view/pages/screenshot/ScreenshotsPage';
import TeamPage from '../../app/view/pages/team/TeamPage';
import UserPage from '../../app/view/pages/user/UserPage';
import { AppRoute } from './interface';

export const routeNames = {
  home: '/',
  login: '/login',
  team: '/team',
  user: '/user',
  screenshots: '/screenshots',
  insights: '/insights',
  workTime: '/work-time',
  weightage: '/weightage',
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
      path: routeNames.insights,
      title: 'Insights',
      Icon: FaChartSimple,
      Component: () => (
        <ProtectedRoute>
          <InsightsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: routeNames.screenshots,
      title: 'Screenshots',
      Icon: AiFillEye,
      Component: () => (
        <ProtectedRoute>
          <ScreenshotsPage />
        </ProtectedRoute>
      ),
    },
    {
      title: 'Decisions',
      Icon: AiOutlineFundProjectionScreen,
      children: [
        {
          title: 'Work Time',
          path: routeNames.workTime,
          Component: () => (
            <ProtectedRoute>
              <WorkTimePage />
            </ProtectedRoute>
          ),
        },
      ],
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
    {
      title: 'Settings',
      Icon: FaGears,
      children: [
        {
          title: 'Application Weightage',
          path: routeNames.weightage,
          Component: () => (
            <ProtectedRoute>
              <WeightagePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ],
};
