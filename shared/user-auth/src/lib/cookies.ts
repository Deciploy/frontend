import { getCookie, setCookie } from 'typescript-cookie';

const key = 'user';

export const setCookies = (data: any, expireAt: Date) => {
  setCookie(key, JSON.stringify(data), expireAt);
};

export const getCookies = <T>() => {
  const user = getCookie(key);
  return user ? (JSON.parse(user) as T) : null;
};
