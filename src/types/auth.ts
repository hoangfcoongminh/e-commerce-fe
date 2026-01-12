import type { Gender } from "./gender";
import type { Role } from "./role";
import type { User } from "./user";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  address: string | null;
  gender: Gender | null;
  role: Role;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}
