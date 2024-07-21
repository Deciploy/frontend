import { Activity, NetworkResponse, Time } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useTrackingDataFetch = (prams: string) => useFetch<NetworkResponse<Array<Activity>>>(`tracking/activity${prams}`);

export const useTimeDataFetch = (prams: string) => useFetch<NetworkResponse<Array<Time>>>(`tracking/time${prams}`);