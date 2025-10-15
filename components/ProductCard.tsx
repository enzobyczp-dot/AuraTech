
import React, { useState } from 'react';
import type { Service, Translation } from '../types';
import { ShieldIcon, VerifiedIcon } from './Icons';

interface ProductCardProps {
  product: Service;
  onClick: (product: Service) => void;
  index: number;
  t: Translation;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, index, t }) => {
  const [isHovered, setIsHovered] = useState(false);
  const startingPrice = product.tiers.length > 0 ? product.tiers[0].price : 0;
  // Create a plausible "original" price for the discount effect
  const originalPrice = startingPrice > 5 ? startingPrice * 1.4 + 5 : startingPrice + 10;
  
  return (
    <div 
      className="bg-gradient-to-br from-sky-500/50 to-indigo-500/50 p-[1.5px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 30}ms` }}
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(product)}
    >
      <div className="bg-white dark:bg-gray-800 rounded-[10.5px] h-full flex flex-col justify-between">
        <div>
          <div className="relative">
            <img className="w-full h-40 object-cover rounded-t-[10px]" src={product.imageUrl} alt={product.name} />
            
            {/* Shield Icon on Hover */}
            <div className={`absolute top-3 right-3 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="p-2 bg-sky-500/80 backdrop-blur-sm rounded-full text-white shadow-lg">
                <ShieldIcon size={20} />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-[10px]"></div>
            <div className="absolute bottom-2 left-3">
              <h3 className="text-lg font-bold text-white">{product.name}</h3>
              <p className="text-xs text-gray-300">{product.category}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 h-10 line-clamp-2">{product.description}</p>
          </div>
        </div>
        <div className="p-4 pt-0">
          <div className="flex justify-between items-center h-12">
            <div className="relative w-28 text-right">
              {/* Default Price */}
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-full transition-all duration-300 ease-in-out ${isHovered ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.startsAt}</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  ${startingPrice.toFixed(2)}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMonth}</span>
                </p>
              </div>
              
              {/* Hover Price */}
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-full transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <p className="text-xs text-red-500 dark:text-red-400 line-through">
                  ${originalPrice.toFixed(2)}
                </p>
                <div className="flex justify-end items-center gap-1">
                  <VerifiedIcon size={16} className="text-green-500" />
                  <p className="text-lg font-bold text-sky-500 dark:text-sky-400">
                    ${startingPrice.toFixed(2)}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMonth}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden px-4 py-2 text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold rounded-full shadow-md group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
              {t.viewPlans}
              <div className="absolute top-0 -left-full w-full h-full bg-white opacity-20 transform -skew-x-45 group-hover:animate-shine"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
