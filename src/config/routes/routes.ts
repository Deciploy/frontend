import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../../app/view/layouts/DashboardLayout';
import ScreenshotsPage from 'src/app/view/pages/screenshot/ScreenshotsPage';
import { appRoutes } from './app-routes';

export const routes: RouteObject[] = [
  ...appRoutes.routes,
  {
    path: '/',
    Component: DashboardLayout,
    children: appRoutes.menuRoutes,
  },
];
