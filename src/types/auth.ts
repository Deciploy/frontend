import { User } from './user';

export interface LoginRequest {
  email: string,
  password: string,
  isRemember: boolean
}

export interface AuthUserData {
  token: {
    token: string;
    expiration: string;
  };
  user: User;
}
