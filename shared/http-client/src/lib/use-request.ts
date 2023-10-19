import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { HttpError, HttpRequestConfig } from './types';

export const useRequest = <T>(requestBaseConfig?: HttpRequestConfig) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<HttpError>();
  const [loading, setLoading] = useState(false);

  const post = async (url: string, body?: any, config?: HttpRequestConfig) => {
    return await execute(
      axios.post(url, body, { ...requestBaseConfig, ...config })
    );
  };

  const get = async (url: string, config?: HttpRequestConfig) => {
    return await execute(axios.get(url, { ...requestBaseConfig, ...config }));
  };

  const put = async (url: string, body?: any, config?: HttpRequestConfig) => {
    return await execute(
      axios.put(url, body, { ...requestBaseConfig, ...config })
    );
  };

  const patch = async (url: string, body?: any, config?: HttpRequestConfig) => {
    return await execute(
      axios.patch(url, body, { ...requestBaseConfig, ...config })
    );
  };

  const del = async (url: string, config?: HttpRequestConfig) => {
    return await execute(
      axios.delete(url, { ...requestBaseConfig, ...config })
    );
  };

  const execute = async (request: Promise<AxiosResponse<T, T>>) => {
    setLoading(true);
    try {
      const result = await request;
      setData(result.data);
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError({
          message: error.message,
          code: error.response?.status,
        });
      }
    } finally {
      setLoading(false);
    }

    return null;
  };

  return { data, error, loading, post, get, put, patch, del };
};
