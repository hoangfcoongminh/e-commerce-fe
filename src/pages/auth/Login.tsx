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
    <div>
      <h2>Login</h2>

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
      <Button onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}
