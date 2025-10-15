
import React, { useMemo } from 'react';
import type { CartItem, Translation } from '../types';
import { CloseIcon, TrashIcon } from './Icons';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (serviceId: number) => void;
  onCheckout: () => void;
  t: Translation;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout, t }) => {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.selectedTier.price, 0);
  }, [cartItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl flex flex-col animate-fadeIn">
        <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold">{t.yourCart}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={t.close}>
            <CloseIcon />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400">{t.cartEmpty}</p>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">{t.cartEmptyDesc}</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {cartItems.map(item => (
              <div key={item.serviceId} className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-sky-600 dark:text-sky-400">{item.selectedTier.name} {t.plan}</p>
                  <p className="text-lg font-bold mt-1">${item.selectedTier.price.toFixed(2)}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.perMonth}</span></p>
                </div>
                 <button onClick={() => onRemoveItem(item.serviceId)} className="p-2 text-gray-500 hover:text-red-500 transition-colors" aria-label={t.removeAria(item.name)}>
                   <TrashIcon />
                 </button>
              </div>
            ))}
          </div>
        )}

        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">{t.monthlyTotal}</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <button 
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {t.checkout}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
