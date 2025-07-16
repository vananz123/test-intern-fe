function Footer() {
  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Cột 1 */}
        <div>
          <h3 className="font-semibold uppercase mb-2 border-b border-gray-400 inline-block">
            Liên kết
          </h3>
          <ul className="mt-2 space-y-1">
            <li>Tin Tức Sự Kiện</li>
            <li>Văn Bản Biểu Mẫu</li>
            <li>Danh Mục Sách</li>
            <li>Kế Hoạch Xuất Bản</li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div>
          <h3 className="font-semibold uppercase mb-2 border-b border-gray-400 inline-block">
            Về chúng tôi
          </h3>
          <ul className="mt-2 space-y-1">
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h3 className="font-semibold uppercase mb-2 border-b border-gray-400 inline-block">
            Chính sách và điều khoản
          </h3>
          <ul className="mt-2 space-y-1">
            <li>Cách thức vận chuyển</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách hồi hoản</li>
            <li>Hướng dẫn đăng ký tài khoản</li>
            <li>Hướng dẫn thanh toán VNPAY trên Website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
