import api from "./api";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth";
import type { ApiResponse } from "../types/api";

export const authService = {
  login(data: LoginRequest) {
    return api.post<ApiResponse<AuthResponse>>("/auth/login", data);
  },

  register(data: RegisterRequest) {
    return api.post<ApiResponse<AuthResponse>>("/auth/register", data);
  },
};
