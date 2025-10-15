
import React from 'react';
import { SunIcon, MoonIcon } from './Icons';
import { Translation } from '../types';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: Translation;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme, t }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={t.toggleThemeAria}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default React.memo(ThemeToggle);
