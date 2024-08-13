import axios from "axios";
import { usePost } from "src/app/utils/hooks";
import { AuthUserData, LoginRequest, NetworkResponse } from "src/types";

export const useLogin = () => usePost<NetworkResponse<AuthUserData>, LoginRequest>('auth/login/manager');