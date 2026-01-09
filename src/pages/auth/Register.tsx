import { useEffect, useState } from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { register } from "../../store/auth/authSlice";
import { Gender } from "../../types/gender";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const passwordTrimmed = password.trim();
    const confirmPasswordTrimmed = confirmPassword.trim();
    if (passwordTrimmed !== confirmPasswordTrimmed) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await dispatch(
        register({
          email,
          password,
          fullName,
          phoneNumber,
          address,
          gender,
        })
      ).unwrap();
      toast.success("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="flex shadow-2xl rounded-xl justify-evenly overflow-hidden">
        <div className="w-full max-w-md bg-white rounded-xl p-8">
          <h2 className="text-5xl font-bold text-center mb-6 text-[var(--color-secondary)]">
            Đăng ký
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
            <Input
              label="Tên người dùng"
              placeholder="Nhập tên của bạn"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="Nhập email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="w-70">
              <label className="block mb-1">Giới tính</label>
              <div className="flex justify-evenly">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value={Gender.MALE}
                    checked={gender === Gender.MALE}
                    onChange={() => setGender(Gender.MALE)}
                  />
                  <label htmlFor="male" className="ml-1 mr-4">
                    Nam
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value={Gender.FEMALE}
                    checked={gender === Gender.FEMALE}
                    onChange={() => setGender(Gender.FEMALE)}
                  />
                  <label htmlFor="female" className="ml-1">
                    Nữ
                  </label>
                </div>
              </div>
            </div>

            <Input
              label="Số điện thoại"
              placeholder="Nhập số điện thoại"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              label="Địa chỉ"
              placeholder="Nhập địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm">
                Tôi đồng ý với các điều khoản và điều kiện
                <span className="text-red-500">*</span>
              </label>
            </div>
            <Button type="submit" loading={loading}>
              Đăng ký
            </Button>
          </form>
          <div className="mt-4 text-center flex flex-row justify-center gap-2">
            <p>Already have an account?</p>
            <Link to="/login" className="font-semibold text-[var(--color-secondary)] hover:text-green-700">
              Login
            </Link>
          </div>
        </div>
        <div className="relative p-8 flex items-center bg-gradient-to-br from-purple-200 to-blue-200">
          <h2 className="absolute inset-8 right-8 text-right text-5xl font-bold text-[var(--color-secondary)]">
            ORDER
          </h2>
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-150 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
