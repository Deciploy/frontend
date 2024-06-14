import { Activity, NetworkResponse } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useTrackingDataFetch = (prams: string) => useFetch<NetworkResponse<Array<Activity>>>(`tracking/activity?${prams}`);