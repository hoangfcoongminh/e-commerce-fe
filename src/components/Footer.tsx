const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-12 py-6 px-4 flex flex-col md:flex-row items-center justify-between text-gray-600">
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="font-bold text-purple-700">FASHION</span>
      </div>
      <div className="text-sm text-center md:text-right">
        © {new Date().getFullYear()} FASHION. All rights reserved.
      </div>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="/about" className="hover:text-purple-700 transition">
          Giới thiệu
        </a>
        <a href="/contact" className="hover:text-purple-700 transition">
          Liên hệ
        </a>
        <a href="/policy" className="hover:text-purple-700 transition">
          Chính sách
        </a>
      </div>
    </footer>
  );
};

export default Footer;
