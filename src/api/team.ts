import { NetworkResponse, Team, TeamRequest } from "@types";
import { useDelete, useFetch, usePatch, usePost } from "src/app/utils/hooks";

export const useTeamFetch = () => useFetch<NetworkResponse<Team[]>>('team');

export const useTeamCreate = () => usePost<NetworkResponse, TeamRequest>('team');

export const useTeamUpdate = (id: string) => usePatch<NetworkResponse, TeamRequest>(`team/${id}`);

export const useTeamDelete = (id: string) => useDelete<NetworkResponse>(`team/${id}`);


