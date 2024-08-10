import {
  Application,
  ApplicationType,
  NetworkResponse,
  TeamWeightage,
  TeamWeightageSavePayload,
} from '@types';
import { useFetch, usePost } from 'src/app/utils/hooks';

export const useFetchApplications = () =>
  useFetch<NetworkResponse<Array<Application>>>(`application`);

export const useFetchApplicationsByType = (type: string) =>
  useFetch<NetworkResponse<Array<Application>>>(`application/${type}`);

export const useFetchApplicationTypes = () =>
  useFetch<NetworkResponse<Array<ApplicationType>>>('application/types');

export const useFetchApplicationWeightages = () =>
  useFetch<NetworkResponse<Array<TeamWeightage>>>(`weightage`);

export const useSaveWeightage = () =>
  usePost<NetworkResponse, Array<TeamWeightageSavePayload>>('weightage');
