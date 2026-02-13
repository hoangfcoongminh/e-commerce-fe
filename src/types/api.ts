export interface ApiResponse<T> {
  timestamp: string;
  success: boolean;
  status: number;
  url: string;
  data: T;
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
