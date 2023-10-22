import { useAuth } from '@user-auth';
import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesConfig } from '../../../config';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to={RoutesConfig.routeNames.login}
      replace={true}
      state={{ redirect: location.pathname }}
    />
  );
};
