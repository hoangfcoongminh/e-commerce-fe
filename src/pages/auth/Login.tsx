import { useState } from "react";
import { login } from "../../store/auth/authSlice";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useAppDispatch } from "../../hooks/redux";

export default function Login() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="w-[50%] centered p-6 rounded-lg shadow-lg mx-auto my-50 border border-gray-200">
      <div className="flex justify-around mt-4">
        <div>
          <h2 className="text-2xl font-bold">ORDER</h2>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-96 h-60 object-cover mb-6 rounded-md"
          />
        </div>
        <div>
          <h2 className="text-2xl text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={false}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
