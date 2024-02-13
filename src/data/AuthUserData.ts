import { User } from './User';

export interface AuthUserData {
  token: {
    token: string;
    expiration: string;
  };
  user: User;
}
