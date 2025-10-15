
import { Translation } from "./types";

const en: Translation = {
  // Header
  facebookAria: "Facebook Profile",
  phoneAria: "Telephone/Zalo",
  telegramAria: "Telegram Profile",
  backToTopAria: "Back to top",

  // ThemeToggle
  toggleThemeAria: "Toggle theme",

  // LanguageSwitcher
  language: "Language",

  // Header Cart
  openCartAria: "Open cart",

  // Hero
  heroTitle: "Stop Overpaying for Subscriptions.",
  heroSubtitle: "We bundle the best services at a fraction of the cost. Get premium access to tools you love, without the premium price tag.",
  heroCTA: "Explore Plans",
  heroCardPass: "AuraCard Pass",
  heroCardTypicalCost: "Typical Monthly Cost",
  heroCardYourPrice: "Your Price",

  // Value Proposition
  vpCostTitle: "Cost Savings",
  vpCostDesc: "Bundle your favorite subscriptions and save up to 70% compared to individual plans.",
  vpConvenienceTitle: "Ultimate Convenience",
  vpConvenienceDesc: "Manage all your subscriptions in one place with a single, simple monthly payment.",
  vpVarietyTitle: "Curated Variety",
  vpVarietyDesc: "Access a wide range of top-tier services for productivity, creativity, and entertainment.",

  // Filters
  searchLabel: "Search",
  searchPlaceholder: "Search services, tools...",
  categoryLabel: "Category",
  allCategories: "All Categories",
  reset: "Reset",
  maxPriceLabel: "Max Price",

  // ProductList
  noProductsTitle: "No Services Found",
  noProductsDesc: "Try adjusting your search or filters to find what you're looking for.",

  // ProductCard
  startsAt: "Starts at",
  perMonth: "/mo",
  viewPlans: "View Plans",

  // ProductModal
  choosePlan: "Choose your plan:",
  addToCart: "Add to Cart",
  close: "Close",

  // CartModal
  yourCart: "Your Cart",
  cartEmpty: "Your cart is empty.",
  cartEmptyDesc: "Find a subscription plan to get started.",
  plan: "Plan",
  monthlyTotal: "Monthly Total",
  checkout: "Proceed to Checkout",
  removeAria: (name: string) => `Remove ${name} from cart`,

  // CheckoutModal
  checkoutSavingsTitle: "Confirm Your Savings",
  checkoutSavingsDesc: "Please scan the QR code with your payment app to complete the secure transaction.",
  checkoutProcessingTitle: "Processing Payment",
  checkoutProcessingDesc: "Please wait, we are securely processing your payment. Do not close this window.",
  checkoutSuccessTitle: "Payment Successful!",
  checkoutSuccessDesc: "Your payment has been received. We are now preparing your order.",
  checkoutCompleteTitle: "Order Confirmed",
  checkoutCompleteDesc: "Thank you for your purchase! You will receive a confirmation email shortly.",
  originalPrice: "Original Price",
  youPay: "You Pay",
  finishShopping: "Finish & Continue Shopping",

  // Pagination
  previous: "Previous",
  next: "Next",
  pageOf: (currentPage, totalPages) => `Page ${currentPage} of ${totalPages}`,

  // Footer
  copyright: (year) => `© ${year} AuraTech. All rights reserved.`,
  contactUs: "Contact Us",

  // TopBar
  yourSession: "Your Session",
  ipAddress: "IP",
  sessionTime: "Time",
  liveActivity: "Live Activity",
  activeSubs: "Active Subs",
  totalSavings: "Total Savings",
};

const vi: Translation = {
  // Header
  facebookAria: "Hồ sơ Facebook",
  phoneAria: "Điện thoại/Zalo",
  telegramAria: "Hồ sơ Telegram",
  backToTopAria: "Quay về đầu trang",

  // ThemeToggle
  toggleThemeAria: "Chuyển đổi giao diện",

  // LanguageSwitcher
  language: "Ngôn ngữ",

  // Header Cart
  openCartAria: "Mở giỏ hàng",

  // Hero
  heroTitle: "Ngừng Trả Phí Quá Cao Cho Các Gói Đăng Ký.",
  heroSubtitle: "Chúng tôi gộp các dịch vụ tốt nhất với chi phí thấp hơn. Nhận quyền truy cập cao cấp vào các công cụ bạn yêu thích mà không phải trả giá cao.",
  heroCTA: "Khám Phá Các Gói",
  heroCardPass: "Thẻ AuraCard",
  heroCardTypicalCost: "Chi Phí Hàng Tháng",
  heroCardYourPrice: "Giá Của Bạn",

  // Value Proposition
  vpCostTitle: "Tiết Kiệm Chi Phí",
  vpCostDesc: "Gộp các gói đăng ký yêu thích của bạn và tiết kiệm tới 70% so với các gói riêng lẻ.",
  vpConvenienceTitle: "Tiện Lợi Tối Ưu",
  vpConvenienceDesc: "Quản lý tất cả các gói đăng ký của bạn ở một nơi với một khoản thanh toán hàng tháng đơn giản.",
  vpVarietyTitle: "Đa Dạng Chọn Lọc",
  vpVarietyDesc: "Truy cập vào nhiều dịch vụ hàng đầu cho năng suất, sáng tạo và giải trí.",

  // Filters
  searchLabel: "Tìm kiếm",
  searchPlaceholder: "Tìm dịch vụ, công cụ...",
  categoryLabel: "Danh mục",
  allCategories: "Tất cả danh mục",
  reset: "Đặt lại",
  maxPriceLabel: "Giá tối đa",

  // ProductList
  noProductsTitle: "Không Tìm Thấy Dịch Vụ",
  noProductsDesc: "Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc của bạn để tìm thứ bạn đang tìm.",

  // ProductCard
  startsAt: "Bắt đầu từ",
  perMonth: "/tháng",
  viewPlans: "Xem Gói",

  // ProductModal
  choosePlan: "Chọn gói của bạn:",
  addToCart: "Thêm vào giỏ hàng",
  close: "Đóng",

  // CartModal
  yourCart: "Giỏ hàng của bạn",
  cartEmpty: "Giỏ hàng của bạn trống.",
  cartEmptyDesc: "Tìm một gói đăng ký để bắt đầu.",
  plan: "Gói",
  monthlyTotal: "Tổng cộng hàng tháng",
  checkout: "Tiến hành thanh toán",
  removeAria: (name: string) => `Xóa ${name} khỏi giỏ hàng`,

  // CheckoutModal
  checkoutSavingsTitle: "Xác nhận Tiết kiệm của bạn",
  checkoutSavingsDesc: "Vui lòng quét mã QR bằng ứng dụng thanh toán của bạn để hoàn tất giao dịch an toàn.",
  checkoutProcessingTitle: "Đang xử lý thanh toán",
  checkoutProcessingDesc: "Vui lòng đợi, chúng tôi đang xử lý thanh toán của bạn một cách an toàn. Đừng đóng cửa sổ này.",
  checkoutSuccessTitle: "Thanh toán thành công!",
  checkoutSuccessDesc: "Thanh toán của bạn đã được nhận. Chúng tôi đang chuẩn bị đơn hàng của bạn.",
  checkoutCompleteTitle: "Đơn hàng đã được xác nhận",
  checkoutCompleteDesc: "Cảm ơn bạn đã mua hàng! Bạn sẽ sớm nhận được email xác nhận.",
  originalPrice: "Giá gốc",
  youPay: "Bạn trả",
  finishShopping: "Hoàn tất & Tiếp tục mua sắm",

  // Pagination
  previous: "Trước",
  next: "Sau",
  pageOf: (currentPage, totalPages) => `Trang ${currentPage} trên ${totalPages}`,

  // Footer
  copyright: (year) => `© ${year} AuraTech. Đã đăng ký bản quyền.`,
  contactUs: "Liên hệ",

  // TopBar
  yourSession: "Phiên của bạn",
  ipAddress: "IP",
  sessionTime: "Thời gian",
  liveActivity: "Hoạt động trực tiếp",
  activeSubs: "Gói đang hoạt động",
  totalSavings: "Tổng tiết kiệm",
};

const th: Translation = {
  // Header
  facebookAria: "โปรไฟล์ Facebook",
  phoneAria: "โทรศัพท์/Zalo",
  telegramAria: "โปรไฟล์ Telegram",
  backToTopAria: "กลับไปด้านบน",

  // ThemeToggle
  toggleThemeAria: "สลับธีม",

  // LanguageSwitcher
  language: "ภาษา",

  // Header Cart
  openCartAria: "เปิดตะกร้าสินค้า",

  // Hero
  heroTitle: "หยุดจ่ายเงินเกินความจำเป็นสำหรับการสมัครสมาชิก",
  heroSubtitle: "เรารวมบริการที่ดีที่สุดในราคาประหยัด รับสิทธิ์การเข้าถึงเครื่องมือที่คุณชื่นชอบในระดับพรีเมียมโดยไม่ต้องจ่ายในราคาพรีเมียม",
  heroCTA: "สำรวจแผน",
  heroCardPass: "บัตร AuraCard",
  heroCardTypicalCost: "ค่าใช้จ่ายรายเดือนปกติ",
  heroCardYourPrice: "ราคาของคุณ",

  // Value Proposition
  vpCostTitle: "ประหยัดค่าใช้จ่าย",
  vpCostDesc: "รวมการสมัครสมาชิกที่คุณชื่นชอบและประหยัดได้ถึง 70% เมื่อเทียบกับแผนเดี่ยว",
  vpConvenienceTitle: "ความสะดวกสบายสูงสุด",
  vpConvenienceDesc: "จัดการการสมัครสมาชิกทั้งหมดของคุณในที่เดียวด้วยการชำระเงินรายเดือนที่ง่ายและสะดวก",
  vpVarietyTitle: "ความหลากหลายที่คัดสรร",
  vpVarietyDesc: "เข้าถึงบริการชั้นนำที่หลากหลายสำหรับประสิทธิภาพการทำงาน ความคิดสร้างสรรค์ และความบันเทิง",

  // Filters
  searchLabel: "ค้นหา",
  searchPlaceholder: "ค้นหาบริการ, เครื่องมือ...",
  categoryLabel: "หมวดหมู่",
  allCategories: "ทุกหมวดหมู่",
  reset: "รีเซ็ต",
  maxPriceLabel: "ราคาสูงสุด",

  // ProductList
  noProductsTitle: "ไม่พบบริการ",
  noProductsDesc: "ลองปรับการค้นหาหรือตัวกรองของคุณเพื่อค้นหาสิ่งที่คุณต้องการ",

  // ProductCard
  startsAt: "เริ่มต้นที่",
  perMonth: "/เดือน",
  viewPlans: "ดูแผน",

  // ProductModal
  choosePlan: "เลือกแผนของคุณ:",
  addToCart: "เพิ่มลงในตะกร้า",
  close: "ปิด",

  // CartModal
  yourCart: "ตะกร้าของคุณ",
  cartEmpty: "ตะกร้าของคุณว่างเปล่า",
  cartEmptyDesc: "ค้นหาแผนการสมัครสมาชิกเพื่อเริ่มต้น",
  plan: "แผน",
  monthlyTotal: "ยอดรวมรายเดือน",
  checkout: "ดำเนินการชำระเงิน",
  removeAria: (name: string) => `ลบ ${name} ออกจากตะกร้า`,

  // CheckoutModal
  checkoutSavingsTitle: "ยืนยันการประหยัดของคุณ",
  checkoutSavingsDesc: "โปรดสแกนรหัส QR ด้วยแอปชำระเงินของคุณเพื่อทำธุรกรรมที่ปลอดภัย",
  checkoutProcessingTitle: "กำลังประมวลผลการชำระเงิน",
  checkoutProcessingDesc: "โปรดรอสักครู่ เรากำลังประมวลผลการชำระเงินของคุณอย่างปลอดภัย อย่าปิดหน้าต่างนี้",
  checkoutSuccessTitle: "ชำระเงินสำเร็จ!",
  checkoutSuccessDesc: "ได้รับการชำระเงินของคุณแล้ว เรากำลังเตรียมคำสั่งซื้อของคุณ",
  checkoutCompleteTitle: "ยืนยันคำสั่งซื้อแล้ว",
  checkoutCompleteDesc: "ขอบคุณสำหรับการซื้อของคุณ! คุณจะได้รับอีเมลยืนยันในไม่ช้า",
  originalPrice: "ราคาเดิม",
  youPay: "คุณจ่าย",
  finishShopping: "เสร็จสิ้นและช็อปปิ้งต่อ",

  // Pagination
  previous: "ก่อนหน้า",
  next: "ถัดไป",
  pageOf: (currentPage, totalPages) => `หน้า ${currentPage} จาก ${totalPages}`,

  // Footer
  copyright: (year) => `© ${year} AuraTech. สงวนลิขสิทธิ์`,
  contactUs: "ติดต่อเรา",

  // TopBar
  yourSession: "เซสชันของคุณ",
  ipAddress: "IP",
  sessionTime: "เวลา",
  liveActivity: "กิจกรรมสด",
  activeSubs: "สมาชิใช้งานอยู่",
  totalSavings: "ยอดประหยัดทั้งหมด",
};


export const translations = { en, vi, th };

export const languageOptions = [
    { id: 'en', name: 'English' },
    { id: 'vi', name: 'Tiếng Việt' },
    { id: 'th', name: 'ไทย' },
];