
import React from 'react';
import { Translation } from '../types';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  t: Translation;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, t }) => {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-12 mb-8" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {t.previous}
      </button>
      <div className="hidden sm:flex items-center mx-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 mx-1 rounded-lg shadow-md transition ${
              currentPage === page
                ? 'bg-sky-500 text-white font-bold'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>
       <div className="sm:hidden mx-2 text-gray-700 dark:text-gray-300">
        {t.pageOf(currentPage, totalPages)}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {t.next}
      </button>
    </div>
  );
};

export default Pagination;
