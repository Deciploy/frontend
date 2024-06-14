import { NetworkResponse, Application, ApplicationType } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useFetchApplications = () => useFetch<NetworkResponse<Array<Application>>>(`application`);

export const useFetchApplicationsByType = (type: string) => useFetch<NetworkResponse<Array<Application>>>(`application/${type}`);

export const useFetchApplicationTypes = () => useFetch<NetworkResponse<Array<ApplicationType>>>('application/types');