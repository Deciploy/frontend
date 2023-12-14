import { useEffect, useState } from 'react';
import {
  AuthDataContextValue,
  UserAuthContext,
  setOptions,
} from './AuthDataContext';
import { AuthData } from './types';
import { getCookies, setCookies } from './cookies';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { jwtDecode } from 'jwt-decode';

interface UserAuthProviderProps<T> {
  children: React.ReactNode;
  onAuthStateChange?: (authData: AuthData<T> | null) => void;
}

export const UserAuthProvider = <T,>({
  children,
  onAuthStateChange,
}: UserAuthProviderProps<T>) => {
  const [authData, setAuthData] = useState<AuthData<T> | null>(null);

  const set = (
    token: string,
    userData?: T,
    { isRemembered = false }: setOptions = {
      isRemembered: false,
    }
  ) => {
    const decodedToken = jwtDecode(token);

    const expiresAt = decodedToken.exp
      ? new Date(decodedToken.exp * 1000)
      : undefined;

    setAuthData({ token, userData, isRemembered, expiresAt });
  };

  const unset = () => {
    setAuthData(null);
  };

  const value: AuthDataContextValue<T> = {
    authData,
    set,
    unset,
  };

  useEffect(() => {
    const userData = getCookies<AuthData<T>>();
    if (userData) {
      setAuthData({
        ...userData,
        expiresAt: new Date(userData.expiresAt as any),
      });
    }
  }, []);

  useEffect(() => {
    if (onAuthStateChange) {
      onAuthStateChange(authData);
    }

    return () => {
      if (onAuthStateChange) {
        onAuthStateChange(null);
      }
    };
  }, [authData, onAuthStateChange]);

  useEffect(() => {
    if (authData && authData.expiresAt) {
      const timeout = setTimeout(() => {
        unset();
      }, authData.expiresAt.getTime() - Date.now());

      return () => {
        clearTimeout(timeout);
      };
    }

    return undefined;
  }, [authData]);

  useEffect(() => {
    if (authData && authData.isRemembered && authData.expiresAt) {
      setCookies(authData, authData.expiresAt);
    }
  }, [authData]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};
