import { FC, PropsWithChildren } from 'react';
import { RequireAuth } from 'react-auth-utils';
import { Navigate, useLocation } from 'react-router-dom';

import { RoutesConfig } from '../../../config';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <RequireAuth
      unauthenticated={
        <Navigate
          to={RoutesConfig.routeNames.login}
          replace={true}
          state={{ redirect: location.pathname }}
        />
      }
    >
      {children}
    </RequireAuth>
  );
};
