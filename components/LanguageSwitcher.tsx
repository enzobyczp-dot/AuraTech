
import React, { useState, useEffect, useRef } from 'react';
import { GlobeIcon, ChevronDownIcon, CheckIcon } from './Icons';
import { Translation } from '../types';
import { translations, languageOptions } from '../translations';


interface LanguageSwitcherProps {
  language: keyof typeof translations;
  setLanguage: (lang: keyof typeof translations) => void;
  t: Translation;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (langId: keyof typeof translations) => {
    setLanguage(langId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const currentLanguageName = languageOptions.find(opt => opt.id === language)?.name || 'Language';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t.language}
      >
        <GlobeIcon size={20} />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguageName}</span>
        <ChevronDownIcon size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 animate-fadeIn"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1">
            {languageOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleLanguageChange(option.id as keyof typeof translations)}
                className="w-full text-left flex justify-between items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <span>{option.name}</span>
                {language === option.id && <CheckIcon size={16} className="text-sky-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
