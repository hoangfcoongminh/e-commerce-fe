import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FaUser } from "react-icons/fa";
import { logout } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const categoryArray = [
    "Sản phẩm",
    "Bộ sưu tập",
    "Khuyến mãi",
    "Tin tức",
    "Giới thiệu",
    "Liên hệ",
  ];
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Đăng xuất thành công!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <header className="w-full h-16 bg-[var(--color-primary)] shadow-md py-4 px-8 flex items-center justify-between fixed z-1000">
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2">
        <img
          src="./src/assets/logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-bold text-[var(--color-text)] tracking-wide">ORDER</span>
      </Link>
      {/* Navigation */}
      <nav className="flex items-center gap-8">
        {categoryArray.map((category) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            className="text-[var(--color-text)] hover:text-[var(--color-text-hv)] font-medium text-base"
          >
            {category}
          </Link>
        ))}
      </nav>
      {/* Auth */}
      <div className="flex items-center gap-4 relative">
        {isAuthenticated ? (
          <div className="relative group">
            <button><FaCartShopping/></button>
            <Link
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 font-semibold text-[var(--color-text)] rounded hover:bg-purple-100 transition cursor-pointer"
            >
              <span>Welcome {user?.fullName || ""}</span>
              <FaUser size={24} className="text-text" />
            </Link>
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
              <Link to="/profile" className="block px-4 py-2 hover:bg-purple-50 text-gray-700">
                Thông tin cá nhân
              </Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-purple-50 text-gray-700">
                Đơn hàng
              </Link>
              <button
                className="w-full text-left px-4 py-2 hover:bg-purple-50 text-gray-700 cursor-pointer"
                onClick={() => {
                  handleLogout();
                }}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded font-semibold  border border-[var(--color-button-border)] bg-[var(--color-bg)] hover:bg-[var(--color-button-border)] hover:text-[var(--color-text-hv)] transition"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded font-semibold bg-[var(--color-button-bg)] text-white hover:bg-[var(--color-button-border)] transition"
            >
              Đăng ký
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
