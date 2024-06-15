import { NetworkResponse, Screenshot } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useScreenshotFetch = (params: string) => useFetch<NetworkResponse<Array<Screenshot>>>(`screenshot${params}`);