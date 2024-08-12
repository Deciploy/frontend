import { useFetch } from '@hooks';
import {
  DateCompanyScore,
  EmployeeScore,
  NetworkResponse,
  TeamScore,
} from '@types';

export const useEmployeeScoreDataFetch = (prams?: string) =>
  useFetch<NetworkResponse<Array<EmployeeScore>>>(
    `activity/score/employee${prams}`
  );

export const useTeamScoreDataFetch = (prams?: string) =>
  useFetch<NetworkResponse<Array<TeamScore>>>(`activity/score/team${prams}`);

export const useDateCompanyDataFetch = (prams?: string) =>
  useFetch<NetworkResponse<Array<DateCompanyScore>>>(
    `activity/score/company${prams}`
  );
