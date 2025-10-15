
import React from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import TopBar from './TopBar';
import { CartIcon, LogoIcon, FacebookIcon, PhoneIcon, TelegramIcon } from './Icons';
import { Translation } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isCartAnimating: boolean;
  t: Translation;
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, theme, toggleTheme, isCartAnimating, t, language, setLanguage }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-sm">
      <TopBar t={t} />
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Left: Socials */}
        <div className="flex-1 flex justify-start items-center space-x-1 md:space-x-2">
          <a
            href="https://facebook.com/thainguyeninfi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.facebookAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-sky-500 to-indigo-600 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <FacebookIcon size={20} />
          </a>
          <a
            href="tel:0938618875"
            aria-label={t.phoneAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-sky-500 to-indigo-600 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <PhoneIcon size={20} />
          </a>
          <a
            href="https://t.me/thainguyeninfi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.telegramAria}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gradient-to-br from-sky-500 to-indigo-600 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <TelegramIcon size={20} />
          </a>
        </div>
        
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              role="button"
              aria-label={t.backToTopAria}
            >
              <LogoIcon />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500">
                AuraTech
              </span>
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center space-x-1 md:space-x-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} t={t} />
          <LanguageSwitcher language={language} setLanguage={setLanguage} t={t} />
          <button
            onClick={onCartClick}
            className={`relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${isCartAnimating ? 'animate-jiggle' : ''}`}
            aria-label={t.openCartAria}
          >
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);