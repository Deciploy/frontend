/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { AuthDataContextValue, UserAuthContext } from './AuthDataContext';
import { AuthData } from './types';

interface UserAuthProviderProps<T> {
  children: React.ReactNode;
  onAuthStateChange?: (authData: AuthData<T> | null) => void;
}

export const UserAuthProvider = <T,>({
  children,
  onAuthStateChange,
}: UserAuthProviderProps<T>) => {
  const [authData, setAuthData] = useState<AuthData<T> | null>(null);

  const set = (token: string, expiresAt: Date, userData?: T) => {
    setAuthData({ token, expiresAt, userData });
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
    if (onAuthStateChange) {
      onAuthStateChange(authData);
    }

    return () => {
      if (onAuthStateChange) {
        onAuthStateChange(null);
      }
    };
  }, [authData, onAuthStateChange]);

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};
