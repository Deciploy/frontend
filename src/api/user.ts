import { NetworkResponse, User, UserRequest } from "@types";
import { useFetch, usePost } from "src/app/utils/hooks";

export const useUserFetch = () => useFetch<NetworkResponse<User[]>>('user');

export const useUserCreate = () => usePost<NetworkResponse, UserRequest>('user');

export const useUserUpdate = (id: string) => usePost<NetworkResponse, UserRequest>(`user/${id}`);

export const useUserDelete = (id: string) => usePost<NetworkResponse>(`user/${id}`);