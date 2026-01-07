import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/user";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../../types/auth";
import { authService } from "../../services/auth.service";

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  //   isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  //   isAuthenticated: false,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  AuthResponse,
  LoginRequest,
  { rejectValue: any }
>("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await authService.login(data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error.message || "Login failed" });
  }
});

export const register = createAsyncThunk<
  AuthResponse,
  RegisterRequest,
  { rejectValue: any }
>("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await authService.register(data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: error.message || "Registration failed" });
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      // state.isAuthenticated = false;
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          if (action.payload.errors) {
            state.error = Object.values(action.payload.errors)
              .map((msg) => `- ${msg}`)
              .join("\n");
          } else {
            state.error = action.payload.message || "Login failed";
          }
        } else {
          state.error = action.error.message || "Login failed";
        }
      })

      //REGISTER
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          if (action.payload.errors) {
            state.error = Object.values(action.payload.errors)
              .map((msg) => `- ${msg}`)
              .join("\n");
          } else {
            state.error = action.payload.message || "Registration failed";
          }
        } else {
          state.error = action.error.message || "Registration failed";
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
