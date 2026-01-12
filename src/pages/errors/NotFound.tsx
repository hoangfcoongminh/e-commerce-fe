import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <h1 className="text-7xl font-extrabold text-purple-700 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Không tìm thấy trang
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Hãy kiểm tra
        lại đường dẫn hoặc quay về trang chủ.
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-purple-700 text-white rounded-full font-semibold shadow hover:bg-purple-800 transition"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
