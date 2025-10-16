import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import ValuePropositionBanner from './components/ValuePropositionBanner';
import { SpinnerIcon } from './components/Icons';
import { useLocalStorage } from './hooks/useLocalStorage';
import { SERVICES } from './constants';
import { translations } from './translations';
import type { Service, CartItem, PricingTier } from './types';

const ITEMS_PER_PAGE = 25; // 5 rows * 5 products

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-20" aria-label="Loading products">
    <SpinnerIcon className="text-sky-500 animate-spinner" size={48} />
  </div>
);

export default function App() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'dark');
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);
  const [language, setLanguage] = useLocalStorage<keyof typeof translations>('language', 'en');
  
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { categories, maxPrice } = useMemo(() => {
    const uniqueCategories = ['all', ...Array.from(new Set(SERVICES.map(p => p.category)))];
    const maxPriceValue = Math.ceil(Math.max(...SERVICES.flatMap(s => s.tiers.map(t => t.price))));
    return { categories: uniqueCategories, maxPrice: maxPriceValue };
  }, []);

  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
      setCurrentMaxPrice(maxPrice);
  }, [maxPrice]);


  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Log user visit on initial load with a client-side IP fallback
  useEffect(() => {
    const logVisit = async () => {
      try {
        // 1. Fetch the client's public IP as a fallback data point.
        let clientIp: string | null = null;
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            clientIp = ipData.ip;
          }
        } catch (ipError) {
          console.warn('Could not fetch client IP for logging fallback:', ipError);
        }

        // 2. Send the request to our serverless function.
        // The server will prioritize its own IP detection method but can use `clientIp` if needed.
        await fetch('/api/log-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Send the client-side IP in the body. It's ok if it's null.
          body: JSON.stringify({ clientIp }),
        });
      } catch (logError) {
        // This catch block handles errors from the fetch call to our own API.
        console.warn('Could not log user visit:', logError);
      }
    };
    
    logVisit();
  }, []); // The empty dependency array ensures this runs only once on initial app load.


  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleCloseProductModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const handleAddToCart = useCallback((service: Service, tier: PricingTier) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.serviceId === service.id);
      const newItem: CartItem = {
        serviceId: service.id,
        name: service.name,
        imageUrl: service.imageUrl,
        selectedTier: tier,
      };

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = newItem;
        return updatedCart;
      }
      return [...prevCart, newItem];
    });
    
    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 400);

  }, [setCart]);
  
  const handleRemoveFromCart = useCallback((serviceId: number) => {
     setCart(prevCart => prevCart.filter(item => item.serviceId !== serviceId));
  }, [setCart]);

  const handleOpenCart = useCallback(() => setIsCartOpen(true), []);
  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);

  const handleCheckout = useCallback(() => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }, []);
  
  const handleCloseCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
  }, []);

  const handleFinishOrder = useCallback(() => {
    setCart([]);
    setIsCheckoutOpen(false);
  }, [setCart]);
  
  const handleResetFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setCurrentMaxPrice(maxPrice);
  }, [maxPrice]);

  const cartItemCount = cart.length;

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.selectedTier.price, 0);
  }, [cart]);

  const filteredServices = useMemo(() => {
    if (currentMaxPrice === undefined) return SERVICES;
    const searchLower = searchTerm.toLowerCase();
    
    return SERVICES.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchLower) ||
                            service.description.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      // Filter based on the price of the lowest tier
      const matchesPrice = service.tiers[0].price <= currentMaxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, currentMaxPrice]);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, currentMaxPrice]);

  const paginatedServices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredServices.slice(startIndex, endIndex);
  }, [filteredServices, currentPage]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const t = translations[language];

  return (
    <div className={`min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-500 flex flex-col bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 bg-[length:200%_200%] animate-background-pan`}>
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={handleOpenCart} 
        theme={theme}
        toggleTheme={toggleTheme}
        isCartAnimating={isCartAnimating}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />
      
      <Hero t={t} />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <ValuePropositionBanner t={t} />

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          currentMaxPrice={currentMaxPrice}
          setCurrentMaxPrice={setCurrentMaxPrice}
          maxPrice={maxPrice}
          onReset={handleResetFilters}
          t={t}
        />
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ProductList products={paginatedServices} onProductClick={handleSelectService} t={t} />
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              t={t}
            />
          </>
        )}
      </main>

      <ProductModal
        product={selectedService}
        onClose={handleCloseProductModal}
        onAddToCart={handleAddToCart}
        t={t}
      />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        t={t}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        onFinish={handleFinishOrder}
        totalPrice={totalPrice}
        t={t}
      />

      <Footer t={t} />
    </div>
  );
}