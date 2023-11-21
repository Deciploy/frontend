import { useContext } from 'react';
import { AuthDataContextValue, UserAuthContext } from './AuthDataContext';

export const useAuth = <T>() => {
  const { authData, set, unset } =
    useContext<AuthDataContextValue<T>>(UserAuthContext);

  const isAuthenticated = !!authData;

  const user = authData?.userData;

  const token = authData?.token;

  return { set, unset, isAuthenticated, user, token };
};
