import { NetworkResponse, Screenshot } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useScreenshotFetch = (userId: string) => useFetch<NetworkResponse<Array<Screenshot>>>(`screenshot/${userId}`);