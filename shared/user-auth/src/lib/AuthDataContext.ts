/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { AuthData } from './types';

export interface setOptions {
  isRemembered?: boolean;
}
export interface AuthDataContextValue<T> {
  authData: AuthData<T> | null;
  set: (token: string, userData?: T, options?: setOptions) => void;
  unset: () => void;
}

export const UserAuthContext = createContext<AuthDataContextValue<any>>({
  authData: null,
  set: () => {},
  unset: () => {},
});
