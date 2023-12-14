export interface NetworkResponse<T> {
  data?: T;
  message?: string;
  status: boolean;
}
