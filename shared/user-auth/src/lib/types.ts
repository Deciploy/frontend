/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthData<T = any> {
  token: string;
  expiresAt?: Date;
  userData?: T;
}
