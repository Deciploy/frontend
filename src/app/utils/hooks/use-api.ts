import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from 'src/app/providers';

const baseURL = process.env.NX_APP_API_BASE_URL;

const getHeaders = (token?: string) => ({
  Authorization: token ? `Bearer ${token}` : '',
  'Content-Type': 'application/json', // Assuming JSON data by default
});

const handleError = (error: any) => {
  if (error.response?.data?.message) {
    throw new Error(error.response.data.message);
  }
  throw new Error(`An error occur: ${error.message}`);
};

const fetchData = async <TData = any, TBody = any>(url: string, token?: string, method: string = 'get', data?: TBody) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${url}`,
      headers: getHeaders(token),
      data: method === 'post' || method === 'patch' ? data : undefined, // Only send data for POST and PATCH
    });

    if (!response.status.toString().startsWith('2')) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const useApi = <TData = any>(url: string, method: string = 'get') => {
  const { token } = useAuth();
  return useQuery<TData, Error>({
    queryKey: [url],
    queryFn: () => fetchData<TData>(url, token ?? undefined, method),
    // Optional configuration for caching, refetching, etc.
  })
}

export const useApiMutation = <TData = any, TBody = any>(url: string, method: string) => {
  const { token } = useAuth();
  return useMutation<TData, Error, TBody, unknown>({
    mutationKey: [url],
    mutationFn: (body) => fetchData<TData>(url, token ?? undefined, method, body),
    // Optional configuration for caching, refetching, etc.
  })
}

export const useFetch = <TData = any>(url: string) => useApi<TData>(url);
export const usePost = <TData = any, TBody = any>(url: string) => useApiMutation<TData, TBody>(url, 'post');
export const usePatch = <TData = any, TBody = any>(url: string) => useApiMutation<TData, TBody>(url, 'patch');
export const usePut = <TData = any, TBody = any>(url: string) => useApiMutation<TData, TBody>(url, 'put');
