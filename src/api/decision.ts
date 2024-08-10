import { Activity, EmployeeWorkTime, NetworkResponse, Time } from '@types';
import { useFetch } from 'src/app/utils/hooks';

export const useEmployeeWorkTime = (prams: string) =>
  useFetch<NetworkResponse<Array<EmployeeWorkTime>>>(
    `decision/work-times${prams}`
  );
