import { NetworkResponse, User, UserRequest } from "@types";
import { useDelete, useFetch, usePatch, usePost } from "src/app/utils/hooks";

export const useUserFetch = () => useFetch<NetworkResponse<User[]>>('user');

export const useUserCreate = () => usePost<NetworkResponse, UserRequest>('user');

export const useUserUpdate = (id: string) => usePatch<NetworkResponse, UserRequest>(`user/${id}`);

export const useUserDelete = (id: string) => useDelete<NetworkResponse>(`user/${id}`);