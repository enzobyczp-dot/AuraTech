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
import ScrollToTopButton from './components/ScrollToTopButton';
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

        // 2. Send the request to our serverless function with a cache-busting parameter.
        // The unique timestamp forces Vercel to treat this as a new request every time.
        await fetch(`/api/log-visit?t=${Date.now()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Send the client-side IP in the body. It's ok if it's null.
          body: JSON.stringify({ clientIp }),
        });
      // FIX: The catch block was malformed and contained extraneous text.
      } catch (logError) {
        console.error('Failed to log visit:', logError);
      }
    };

    logVisit();
  }, []);

  const t = translations[language];

  const handleProductClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  const handleAddToCart = useCallback((service: Service, tier: PricingTier) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.serviceId === service.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.serviceId === service.id ? { ...item, selectedTier: tier } : item
        );
      }
      return [...prevCart, { serviceId: service.id, name: service.name, imageUrl: service.imageUrl, selectedTier: tier }];
    });
    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 500);
  }, [setCart]);

  const handleRemoveFromCart = useCallback((serviceId: number) => {
    setCart(prevCart => prevCart.filter(item => item.serviceId !== serviceId));
  }, [setCart]);
  
  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  
  const handleFinishCheckout = () => {
    setIsCheckoutOpen(false);
    setCart([]);
  };

  const handleResetFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
    setCurrentMaxPrice(maxPrice);
    setCurrentPage(1);
  }, [maxPrice]);

  // Derived state for filtering and pagination
  const filteredServices = useMemo(() => {
    return SERVICES
      .filter(service => {
        const searchTermLower = searchTerm.toLowerCase();
        return service.name.toLowerCase().includes(searchTermLower) ||
               service.description.toLowerCase().includes(searchTermLower) ||
               service.category.toLowerCase().includes(searchTermLower);
      })
      .filter(service => {
        return selectedCategory === 'all' || service.category === selectedCategory;
      })
      .filter(service => {
        return service.tiers.some(tier => tier.price <= currentMaxPrice);
      });
  }, [searchTerm, selectedCategory, currentMaxPrice]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);


  const cartItemCount = cart.length;
  const cartTotalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.selectedTier.price, 0);
  }, [cart]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans">
      <Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        isCartAnimating={isCartAnimating}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="container mx-auto px-4 pt-8">
        <Hero t={t} />
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
            <ProductList products={paginatedServices} onProductClick={handleProductClick} t={t} />
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} t={t} />
            )}
          </>
        )}
      </main>
      
      <Footer t={t} />

      {selectedService && (
        <ProductModal
          product={selectedService}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
          t={t}
        />
      )}

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        t={t}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onFinish={handleFinishCheckout}
        totalPrice={cartTotalPrice}
        t={t}
      />

      <ScrollToTopButton t={t} />
    </div>
  );
}