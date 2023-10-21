import { httpClient } from '@http-client';
import { FC, PropsWithChildren, useEffect } from 'react';

const AppLauncherProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    /*
      set base url for http client
    */
    httpClient.defaults.baseURL = process.env.NX_APP_API_BASE_URL;
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
