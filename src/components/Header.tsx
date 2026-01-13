import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/auth/authSlice";
import { toast } from "react-toastify";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { Search } from "./ui/Search";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);

  const userNav = [
    { name: "Thông tin cá nhân", path: "/profile" },
    { name: "Đơn hàng", path: "/orders" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Đăng xuất thành công!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <>
      <header className="w-full h-20 bg-[var(--color-bg)] shadow-md py-4 px-8 flex items-center justify-around fixed z-1000">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img src="./src/assets/logo2.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-3xl font-medium text-[var(--color-primary)] tracking-wide">
            ORDER
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <Search className="w-150" />
        </nav>
        {/* Navigation */}
        {/* <nav className="flex items-center gap-8">
        {categoryArray.map((category) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            className="text-[var(--color-primary)] hover:text-[var(--color-text-hv)] font-medium text-base"
          >
            {category}
          </Link>
        ))}
      </nav> */}
        {/* Auth */}
        <div className="flex items-center gap-6">
          {/* User + dropdown */}
          <div className="relative group">
            <Link
              to="/profile"
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
            >
              <LuUser className="text-2xl text-gray-700" />
            </Link>

            {/* Dropdown menu */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 w-52 bg-white rounded shadow-2xl overflow-hidden transition-opacity duration-150 z-50">
              {userNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--color-primary)] hover:text-[var(--color-text)]"
                >
                  {item.name}
                </Link>
              ))}
              <button
                type="button"
                className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--color-primary)] hover:text-[var(--color-text)] cursor-pointer"
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          </div>

          {/* Cart icon tách riêng, không ảnh hưởng dropdown */}
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
          >
            <LuShoppingCart className="text-2xl text-gray-700" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
