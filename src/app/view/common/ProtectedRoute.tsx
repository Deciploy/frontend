import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'src/app/providers';

import { RoutesConfig } from '../../../config';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();

  return token ? (
    <>{children}</>
  ) : (
    <Navigate
      to={RoutesConfig.routeNames.login}
      replace={true}
      state={{ redirect: location.pathname }}
    />
  );
};
