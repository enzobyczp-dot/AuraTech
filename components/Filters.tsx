
import React from 'react';
import { SearchIcon } from './Icons';
import { Translation } from '../types';

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  currentMaxPrice: number;
  setCurrentMaxPrice: (price: number) => void;
  maxPrice: number;
  onReset: () => void;
  t: Translation;
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  currentMaxPrice,
  setCurrentMaxPrice,
  maxPrice,
  onReset,
  t,
}) => {
  return (
    <div className="mb-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-md animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        {/* Search Input */}
        <div className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.searchLabel}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="text-gray-400" size={20} />
            </span>
            <input
              type="text"
              id="search"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-sky-500 focus:border-sky-500 transition"
              aria-label={t.searchLabel}
            />
          </div>
        </div>

        {/* Category Select */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.categoryLabel}
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-sky-500 focus:border-sky-500 transition"
            aria-label={t.categoryLabel}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? t.allCategories : cat}
              </option>
            ))}
          </select>
        </div>
        
        {/* Reset Button */}
        <div>
            <button
                onClick={onReset}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition"
                aria-label={t.reset}
            >
                {t.reset}
            </button>
        </div>

        {/* Price Slider */}
        <div className="md:col-span-4 mt-2">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.maxPriceLabel}: <span className="font-bold text-sky-600 dark:text-sky-400">${Number(currentMaxPrice).toFixed(0)}</span>
          </label>
          <input
            type="range"
            id="price"
            min="0"
            max={maxPrice}
            value={currentMaxPrice}
            onChange={(e) => setCurrentMaxPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer range-slider"
            aria-label={t.maxPriceLabel}
          />
           <style>{`
            .range-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              background: #0ea5e9; /* sky-500 */
              border-radius: 50%;
              cursor: pointer;
              transition: background-color 0.2s;
            }
            .range-slider::-webkit-slider-thumb:hover {
              background: #0284c7; /* sky-600 */
            }
            .range-slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
              background: #0ea5e9; /* sky-500 */
              border-radius: 50%;
              cursor: pointer;
              border: none;
              transition: background-color 0.2s;
            }
            .range-slider::-moz-range-thumb:hover {
              background: #0284c7; /* sky-600 */
            }
           `}</style>
        </div>
      </div>
    </div>
  );
};

export default Filters;
