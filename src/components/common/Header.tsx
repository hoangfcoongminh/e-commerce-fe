import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { FaUser } from "react-icons/fa";
import { use } from "react";

export const Header = () => {
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
  return (
    <header className="w-full h-20 bg-white shadow-md py-4 px-8 flex items-center justify-between fixed z-1000">
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-bold text-purple-700 tracking-wide">ORDER</span>
      </Link>
      {/* Navigation */}
      <nav className="flex items-center gap-8">
        {categoryArray.map((category) => (
          <Link
            key={category}
            to={`/${category.toLowerCase()}`}
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            {category}
          </Link>
        ))}
      </nav>
      {/* Auth */}
      <div className="flex items-center gap-4">
        {/* {isAuthenticated ? ( */}
        <>
          <Link
            to="/profile"
            //   className="px-4 py-2 rounded font-semibold text-purple-700 border border-purple-700 hover:bg-purple-50 transition"
          >
            <FaUser size={24} className="text-purple-700" />
            <span>Welcome {user?.fullName || ""}</span>
          </Link>
        </>
        {/* ) : ( */}
        {/* <>
            <Link
              to="/login"
              className="px-4 py-2 rounded font-semibold text-purple-700 border border-purple-700 hover:bg-purple-50 transition"
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded font-semibold bg-purple-700 text-white hover:bg-purple-800 transition"
            >
              Đăng ký
            </Link>
          </> */}
        {/* )} */}
      </div>
    </header>
  );
};

export default Header;
