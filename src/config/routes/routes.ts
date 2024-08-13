import { RouteObject } from 'react-router-dom';

import DashboardLayout from '../../app/view/layouts/DashboardLayout';
import { appRoutes } from './app-routes';

const getAllMenuRoutes = () => {
  const allRoutes: RouteObject[] = [];
  appRoutes.menuRoutes.forEach((route) => {
    if (route.children) {
      route.children.forEach((child) => {
        allRoutes.push(child as RouteObject);
      });
    } else {
      allRoutes.push(route as RouteObject);
    }
  });
  return allRoutes;
};

export const routes: RouteObject[] = [
  ...appRoutes.routes,
  {
    path: '/',
    Component: DashboardLayout,
    children: getAllMenuRoutes(),
  },
];
