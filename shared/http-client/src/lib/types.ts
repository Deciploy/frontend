import { AxiosRequestConfig } from 'axios';

export type HttpRequestConfig = AxiosRequestConfig;

export interface HttpResponseError {
  message: string;
  code: number | undefined;
}
