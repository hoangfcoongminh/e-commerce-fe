import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/common/Home";
import MainLayout from "./components/common/MainLayout";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {["/", "/home"].map((path) => (
            <Route key={path} path={path} element={<Home />} />
          ))}
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          toastStyle={{ whiteSpace: "pre-line" }}
        />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
