import { useEffect, useState } from "react";
import { login } from "../../store/auth/authSlice";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {}
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-max-content bg-white rounded-xl shadow-2xl p-8 flex flex-row justify-around overflow-hidden">
        <div className="flex flex-col w-1/2">
          <h2 className="text-2xl font-bold">ORDER</h2>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-96 h-60 object-cover mb-6 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Login
            </Button>
          </form>
          <div className="mt-4 text-center flex flex-row justify-center gap-2">
            <p>Don't have an account?</p>
            <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-700">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
