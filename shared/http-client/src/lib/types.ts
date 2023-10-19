import { AxiosRequestConfig } from 'axios';

export type HttpRequestConfig = AxiosRequestConfig;

export interface HttpError {
  message: string;
  code: number | undefined;
}
