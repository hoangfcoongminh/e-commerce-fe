export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Banner */}
      <div className="relative w-full h-80 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 mb-12">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
          alt="Fashion Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow mb-4">
            Thời Trang Đỉnh Cao
          </h1>
          <p className="text-xl text-white mb-6">
            Khám phá bộ sưu tập mới nhất, phong cách trẻ trung, hiện đại!
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-bold rounded-full shadow hover:bg-purple-100 transition"
          >
            Mua ngay
          </a>
        </div>
      </div>

      {/* Danh mục nổi bật */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
          Danh mục nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Nam"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Thời trang Nam</h3>
            <a
              href="/shop?category=men"
              className="text-blue-500 hover:underline"
            >
              Xem sản phẩm
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
              alt="Nữ"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Thời trang Nữ</h3>
            <a
              href="/shop?category=women"
              className="text-blue-500 hover:underline"
            >
              Xem sản phẩm
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
              alt="Phụ kiện"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Phụ kiện</h3>
            <a
              href="/shop?category=accessories"
              className="text-blue-500 hover:underline"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>

      {/* Lợi ích */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🚚</div>
            <h4 className="font-bold mb-1">Giao hàng nhanh</h4>
            <p>Miễn phí vận chuyển cho đơn hàng từ 500K</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🔒</div>
            <h4 className="font-bold mb-1">Thanh toán an toàn</h4>
            <p>Bảo mật tuyệt đối, nhiều hình thức thanh toán</p>
          </div>
          <div>
            <div className="text-4xl mb-2">💬</div>
            <h4 className="font-bold mb-1">Hỗ trợ 24/7</h4>
            <p>Đội ngũ CSKH luôn sẵn sàng giải đáp</p>
          </div>
        </div>
      </div>
    </div>
  );
};
