import { httpClient } from '@http-client';
import { useAuth } from '@user-auth';
import { FC, PropsWithChildren, useEffect } from 'react';
import { User } from 'src/data';

const AppLauncherProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = useAuth();

  useEffect(() => {
    /*
      set base url for http client
    */
    httpClient.defaults.baseURL = process.env.NX_APP_API_BASE_URL;

    /*
      set access token for http client
    */
    httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    /*
      set request interceptor
      handle request errors
    */
    httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.data.message) {
          return Promise.reject({
            ...error,
            message: error.response.data.message,
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return children;
};

export default AppLauncherProvider;
