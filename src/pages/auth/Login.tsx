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
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="flex flex-row items-center justify-center w-[1100px] h-[650px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Ảnh bên trái */}
        <div className="flex flex-col items-center justify-center w-1/2 h-full bg-gradient-to-br from-purple-200 to-blue-200">
          <h2 className="text-5xl font-extrabold text-[var(--color-secondary)] mb-8 tracking-wide">ORDER</h2>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login banner"
            className="w-[420px] h-[320px] object-cover rounded-xl shadow-xl"
          />
        </div>
        {/* Form bên phải */}
        <div className="flex flex-col justify-center w-1/2 h-full px-16">
          <h2 className="text-6xl text-center font-bold mb-8 text-[var(--color-secondary)]">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
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
