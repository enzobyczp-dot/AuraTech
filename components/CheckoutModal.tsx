
import React, { useState, useEffect, useMemo } from 'react';
import { CloseIcon, CheckCircleIcon, CreditCardIcon, SpinnerIcon } from './Icons';
import { Translation } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish: () => void;
  totalPrice: number;
  t: Translation;
}

type PaymentStatus = 'pending' | 'processing' | 'success' | 'complete';

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onFinish, totalPrice, t }) => {
  const [status, setStatus] = useState<PaymentStatus>('pending');
  const originalPrice = useMemo(() => totalPrice * 3.5, [totalPrice]);

  useEffect(() => {
    if (isOpen) {
      setStatus('pending');
      const timer1 = setTimeout(() => setStatus('processing'), 3000);
      const timer2 = setTimeout(() => setStatus('success'), 6000);
      const timer3 = setTimeout(() => setStatus('complete'), 8000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    if (status === 'complete') {
      onFinish();
    } else {
      onClose();
    }
  };

  const getStatusContent = () => {
    switch (status) {
      case 'pending':
        return {
          icon: null,
          title: t.checkoutSavingsTitle,
          message: t.checkoutSavingsDesc,
        };
      case 'processing':
        return {
          icon: <SpinnerIcon className="text-sky-500 animate-spinner" size={64}/>,
          title: t.checkoutProcessingTitle,
          message: t.checkoutProcessingDesc,
        };
      case 'success':
        return {
          icon: <CheckCircleIcon className="text-green-500" size={64}/>,
          title: t.checkoutSuccessTitle,
          message: t.checkoutSuccessDesc,
        };
      case 'complete':
        return {
          icon: <CheckCircleIcon className="text-green-500" size={64}/>,
          title: t.checkoutCompleteTitle,
          message: t.checkoutCompleteDesc,
        };
      default:
        return { icon: null, title: '', message: '' };
    }
  };

  if (!isOpen) return null;

  const { icon, title, message } = getStatusContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={handleClose}>
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md m-4 animate-fadeIn text-center p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={t.close}
        >
          <CloseIcon />
        </button>

        {icon && <div className="mb-6 flex justify-center">{icon}</div>}

        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{message}</p>

        {status === 'pending' && (
          <div className="animate-fadeIn">
            <div className="mb-8 p-6 bg-slate-100 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-lg">
                  <span>{t.originalPrice}</span>
                  <div className="relative">
                      <span className="opacity-70">${originalPrice.toFixed(2)}</span>
                      <div className="absolute inset-y-0 my-auto h-0.5 w-full bg-red-500 transform origin-left animate-price-hide-slash rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-800 dark:text-white font-bold text-2xl mt-4 opacity-0 animate-price-show">
                  <span className="text-green-500">{t.youPay}</span>
                  <div className="flex items-center gap-2">
                      <CreditCardIcon className="text-green-500" size={28}/>
                      <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=example" 
                alt="QR Code for payment"
                className="w-48 h-48"
              />
            </div>
          </div>
        )}
        
        {status === 'complete' && (
           <button 
            onClick={onFinish}
            className="w-full mt-4 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t.finishShopping}
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
