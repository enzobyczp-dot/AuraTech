
import React, { useState, useEffect } from 'react';
import type { Service, PricingTier, Translation } from '../types';
import { CloseIcon, CheckIcon } from './Icons';

interface ProductModalProps {
  product: Service | null;
  onClose: () => void;
  onAddToCart: (product: Service, tier: PricingTier) => void;
  t: Translation;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart, t }) => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  useEffect(() => {
    if (product && product.tiers.length > 0) {
      setSelectedTier(product.tiers[0]);
    } else {
      setSelectedTier(null);
    }
  }, [product]);
  
  if (!product) return null;

  const handleAddToCartClick = () => {
    if (product && selectedTier) {
      onAddToCart(product, selectedTier);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl m-4 animate-fadeIn max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
          aria-label={t.close}
        >
          <CloseIcon />
        </button>

        <div className="grid md:grid-cols-2 flex-grow min-h-0">
          <div className="relative md:rounded-l-2xl overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover min-h-[250px] md:min-h-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm font-semibold bg-black/30 px-2 py-1 rounded">{product.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-1">{product.name}</h2>
             </div>
          </div>
          <div className="p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{product.fullDescription}</p>
              
              <h3 className="text-lg font-bold mb-3">{t.choosePlan}</h3>
              <div className="space-y-3">
                {product.tiers.map((tier) => {
                  const originalPrice = tier.price > 5 ? tier.price * 1.4 + 5 : tier.price + 10;
                  return (
                    <div
                      key={tier.name}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${selectedTier?.name === tier.name ? 'border-sky-500 bg-sky-50 dark:bg-sky-900/30' : 'border-gray-200 dark:border-gray-700 hover:border-sky-300 dark:hover:border-sky-700'}`}
                      role="radio"
                      aria-checked={selectedTier?.name === tier.name}
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && setSelectedTier(tier)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 ${selectedTier?.name === tier.name ? 'border-sky-500 bg-sky-500' : 'border-gray-400'} flex items-center justify-center`}>
                            {selectedTier?.name === tier.name && <CheckIcon className="text-white" size={14}/>}
                          </div>
                          <span className="font-semibold">{tier.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-red-500 dark:text-red-400 line-through opacity-75">
                            ${originalPrice.toFixed(2)}
                          </span>
                          <span className="block font-bold text-lg">${tier.price.toFixed(2)}<span className="font-normal text-sm text-gray-500 dark:text-gray-400">{t.perMonth}</span></span>
                        </div>
                      </div>
                      <ul className="mt-3 pl-8 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {tier.features.map((feature, i) => <li key={i} className="list-disc">{feature}</li>)}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleAddToCartClick}
                disabled={!selectedTier}
                className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {t.addToCart}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
