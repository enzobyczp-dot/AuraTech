
import React from 'react';
import ProductCard from './ProductCard';
import type { Service, Translation } from '../types';

interface ProductListProps {
  products: Service[];
  onProductClick: (product: Service) => void;
  t: Translation;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick, t }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{t.noProductsTitle}</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          {t.noProductsDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} index={index} t={t} />
      ))}
    </div>
  );
};

export default ProductList;
