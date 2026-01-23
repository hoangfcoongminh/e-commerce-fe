// import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../store/store";
// import type { LoginRequest, RegisterRequest } from "../types/auth";
// import { login, logout, register } from "../store/authSlice";

// export function useAuth() {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useSelector((state: RootState) => state.auth);

//   return {
//     ...auth,
//     login: (data: LoginRequest) => dispatch(login(data)),
//     register: (data: RegisterRequest) => dispatch(register(data)),
//     logout: () => {
//       dispatch(logout());
//       localStorage.clear();
//     },
//   };
// }
