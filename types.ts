
export interface PricingTier {
  name: string;
  price: number;
  features: string[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  tiers: PricingTier[];
}

export interface CartItem {
  serviceId: number;
  name: string;
  imageUrl: string;
  selectedTier: PricingTier;
}

export type Translation = {
  // Header
  facebookAria: string;
  phoneAria: string;
  telegramAria: string;
  backToTopAria: string;
  
  // ThemeToggle
  toggleThemeAria: string;

  // LanguageSwitcher
  language: string;

  // Header Cart
  openCartAria: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroCardPass: string;
  heroCardTypicalCost: string;
  heroCardYourPrice: string;

  // Value Proposition
  vpCostTitle: string;
  vpCostDesc: string;
  vpConvenienceTitle: string;
  vpConvenienceDesc: string;
  vpVarietyTitle: string;
  vpVarietyDesc: string;

  // Filters
  searchLabel: string;
  searchPlaceholder: string;
  categoryLabel: string;
  allCategories: string;
  reset: string;
  maxPriceLabel: string;

  // ProductList
  noProductsTitle: string;
  noProductsDesc: string;

  // ProductCard
  startsAt: string;
  perMonth: string;
  viewPlans: string;

  // ProductModal
  choosePlan: string;
  addToCart: string;
  close: string;

  // CartModal
  yourCart: string;
  cartEmpty: string;
  cartEmptyDesc: string;
  plan: string;
  monthlyTotal: string;
  checkout: string;
  removeAria: (name: string) => string;

  // CheckoutModal
  checkoutSavingsTitle: string;
  checkoutSavingsDesc: string;
  checkoutProcessingTitle: string;
  checkoutProcessingDesc: string;
  checkoutSuccessTitle: string;
  checkoutSuccessDesc: string;
  checkoutCompleteTitle: string;
  checkoutCompleteDesc: string;
  originalPrice: string;
  youPay: string;
  finishShopping: string;

  // Pagination
  previous: string;
  next: string;
  pageOf: (currentPage: number, totalPages: number) => string;

  // Footer
  copyright: (year: number) => string;
  contactUs: string;

  // TopBar
  yourSession: string;
  ipAddress: string;
  sessionTime: string;
  liveActivity: string;
  activeSubs: string;
  totalSavings: string;
};