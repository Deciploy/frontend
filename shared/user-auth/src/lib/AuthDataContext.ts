/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

export interface AuthData<T> {
  token: string;
  expiresAt?: Date;
  userData?: T;
}

export interface AuthDataContextValue<T> {
  authData: AuthData<T> | null;
  set: (token: string, expiresAt: Date, userData?: T) => void;
  unset: () => void;
}

export const UserAuthContext = createContext<AuthDataContextValue<any>>({
  authData: null,
  set: () => {},
  unset: () => {},
});
