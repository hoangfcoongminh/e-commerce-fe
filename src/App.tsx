import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/MainLayout";
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
