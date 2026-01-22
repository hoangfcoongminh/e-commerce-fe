import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth";
import { authService } from "../services/auth.service";
import type { Gender } from "../types/gender";
import { Role } from "../types/role";
import type { ApiError, ApiResponse } from "../types/api";

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  ApiResponse<AuthResponse>,
  { email: string; password: string },
  { rejectValue: ApiError }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  const payload: LoginRequest = {
    email,
    password,
  };
  try {
    const response = await authService.login(payload);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data as ApiError);
  }
});

export const register = createAsyncThunk<
  ApiResponse<AuthResponse>,
  {
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    address: string;
    gender: Gender | null;
  },
  { rejectValue: ApiError }
>(
  "auth/register",
  async ({ email, password, fullName, phoneNumber, address, gender }, { rejectWithValue }) => {
    const payload: RegisterRequest = {
      email,
      password,
      fullName,
      phoneNumber,
      address,
      gender,
      role: Role.USER,
    };

    try {
      const response = await authService.register(payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data as ApiError);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      //LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;
        state.user = data.user;
        state.token = data.token;
        state.refreshToken = data.refreshToken;
        state.isAuthenticated = true;

        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        const err = action.payload;
        if (err) {
          if (err.errors) {
            state.error = Object.values(err.errors)
              .map((msg) => `- ${msg}`)
              .join("\n");
          } else {
            state.error = err.message || "Login failed";
          }
        } else {
          state.error = "Login failed";
        }
      })

      //REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;
        state.user = data.user;
        state.token = data.token;
        state.refreshToken = data.refreshToken;
        state.isAuthenticated = true;

        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        const err = action.payload;
        if (err) {
          if (err.errors) {
            state.error = Object.values(err.errors)
              .map((msg) => `- ${msg}`)
              .join("\n");
          } else {
            state.error = err.message || "Registration failed";
          }
        } else {
          state.error = "Registration failed";
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
