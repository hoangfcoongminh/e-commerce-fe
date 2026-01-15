import type { Pagination } from "./pagination";

export interface ApiResponse<T> {
  timestamp: string;
  success: boolean;
  status: number;
  url: string;
  data: T;
  pagination?: Pagination;
}

export interface ApiError {
  timestamp: string;
  success: false;
  status: number;
  errorCode: string;
  errors?: Record<string, string>;
  message: string;
  url: string;
}
