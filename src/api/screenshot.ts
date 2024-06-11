import { NetworkResponse, Screenshot } from "@types";
import { useFetch } from "src/app/utils/hooks";

export const useScreenshotFetch = (url: string | undefined) => useFetch<NetworkResponse<Array<Screenshot>>>(`screenshot/${url}`);