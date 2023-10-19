import { useEffect } from 'react';
import { HttpRequestConfig } from './types';
import { useRequest } from './use-request';

export const useFetch = <T>(url: string, config?: HttpRequestConfig) => {
  const { data, error, loading, get } = useRequest<T>(config);

  useEffect(() => {
    const fetchData = async () => {
      await get(url);
    };
    fetchData();
  }, [url, config]);

  return { data, error, loading };
};
