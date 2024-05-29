export interface NetworkResponse<T = any> {
  data?: T;
  message?: string;
  status: boolean;
}
