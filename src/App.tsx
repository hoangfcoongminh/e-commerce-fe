import { BrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./pages/errors/NotFound";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />

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
