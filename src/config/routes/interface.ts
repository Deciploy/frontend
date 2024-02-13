export interface AppRouteItem {
  path?: string;
  index?: boolean;
  protected?: boolean;
  Component: React.ComponentType<any>;
}

export interface AppMenuRouteItem extends AppRouteItem {
  title?: string;
  Icon?: React.ComponentType<any>;
}

export interface AppRoute {
  routes: AppRouteItem[];
  menuRoutes: AppMenuRouteItem[];
}
