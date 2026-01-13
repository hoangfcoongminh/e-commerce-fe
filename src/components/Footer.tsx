import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 mt-16">
      {/* Top area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="./src/assets/logo2.png" alt="ORDER" className="w-9 h-9 object-contain" />
              <span className="text-2xl font-semibold text-[var(--color-primary)]">ORDER</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              ORDER mang đến những bộ sưu tập thời trang cao cấp, được chọn lọc kỹ lưỡng dành cho
              những khách hàng yêu thích sự tinh tế và khác biệt.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide mb-4">THÔNG TIN</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">
                  Về ORDER
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-[var(--color-primary)] transition-colors">
                  Chính sách &amp; Điều khoản
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide mb-4">HỖ TRỢ</h4>
            <ul className="space-y-2 text-sm">
              <li>Hotline: 0123 456 789</li>
              <li>Email: support@orderfashion.com</li>
              <li>Thời gian: 8:00 - 22:00 (T2 - CN)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} ORDER Fashion. All rights reserved.</p>
        <div className="flex gap-4">
          <button className="hover:text-[var(--color-primary)] transition-colors">Privacy</button>
          <button className="hover:text-[var(--color-primary)] transition-colors">Terms</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
