import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import NotFound from "../pages/errors/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
export const AppRoutes = () => {
  return (
    <Routes>
      {["/", "/home"].map((path) => (
        <Route key={path} path={path} element={<Home />} />
      ))}
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
